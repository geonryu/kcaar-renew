import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import KioskProcess from "../../components/evaluation/kiosk/kioskProcess";

const Wrap = styled.div``;

export default function KioskEval() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "접근성시험평가", "to" : "/evaluation/accessibility", "isActive": "false", "key": "accessibility" },
                    {"tit" : "키오스크접근성시험평가", "to" : "/evaluation/kiosk", "isActive": "true", "key": "kiosk" },
                    {"tit" : "가전접근성시험평가", "to" : "/evaluation/appliance", "isActive": "false", "key": "appliance" },
                    {"tit" : "모바일접근성시험평가", "to" : "/evaluation/mobile", "isActive": "false", "key": "mobile" },
                ]}
            ></LocalNavigation>
            <KioskProcess></KioskProcess>
        </Wrap>
    )
}