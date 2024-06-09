import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import MobileProcess from "../../components/evaluation/mobile/mobileProcess";
import MobileCertSystem from "../../components/evaluation/mobile/mobileCertSystem";

const Wrap = styled.div``;

export default function Mobile() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "접근성시험평가", "to" : "/evaluation/accessibility", "isActive": "false", "key": "accessibility" },
                    {"tit" : "키오스크접근성시험평가", "to" : "/evaluation/kiosk", "isActive": "false", "key": "kiosk" },
                    {"tit" : "가전접근성시험평가", "to" : "/evaluation/appliance", "isActive": "false", "key": "appliance" },
                    {"tit" : "모바일접근성시험평가", "to" : "/evaluation/mobile", "isActive": "true", "key": "mobile" },
                ]}
            ></LocalNavigation>
            <MobileCertSystem />
            <MobileProcess />
        </Wrap>
    )
}