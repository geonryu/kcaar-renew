import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import ApplianceProcess from "../../components/evaluation/appliance/applianceProcess";

const Wrap = styled.div``;

export default function ApplianceEval() {
    return (
        <Wrap>
            <LocalNavigation
                LNB={[
                    {"tit" : "접근성시험평가", "to" : "/evaluation/accessibility", "isActive": "false", "key": "accessibility" },
                    {"tit" : "키오스크접근성시험평가", "to" : "/evaluation/kiosk", "isActive": "false", "key": "kiosk" },
                    {"tit" : "가전접근성시험평가", "to" : "/evaluation/appliance", "isActive": "true", "key": "appliance" },
                    {"tit" : "모바일접근성시험평가", "to" : "/evaluation/mobile", "isActive": "false", "key": "mobile" },
                ]}
            ></LocalNavigation>
            <ApplianceProcess />
        </Wrap>
    )
}