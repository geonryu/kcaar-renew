import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

// Initialize Firebase and dotenv
admin.initializeApp();
dotenv.config();

const gmailEmail = process.env.GMAIL_EMAIL;
const gmailPassword = process.env.GMAIL_PASSWORD;

// Configure the transporter for Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

export const sendInquiryNotification = functions.firestore
  .document("inquiry/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const docId = context.params.docId;
    const inquiryLink = `https://kcaar.com/inquiry/${docId}`; // 문의사항 상세 페이지 링크

    const mailOptions = {
      from: "noreply@kcaa.re.kr",
      to: gmailEmail, // 알림을 받을 이메일 주소
      subject: `[WEB알림] ${data.writer}님의 문의가 접수되었습니다.`,
      html: `
        <p>문의자 : ${data.writer} (${data.email}).</p>
        <p>제목: ${data.tit}</p>
        <p>내용: ${data.content}</p>
        <p><a href="${inquiryLink}" style="display: inline-block; background-color: dodgerblue; color: #fff; font-weight: bold; padding: 0.75rem 1.25rem; border-radius: 999px;">문의사항 확인하기</a></p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
