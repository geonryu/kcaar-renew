import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import EvaluationSummary from "../../components/evaluation/accessibility/evaluationSummary";
import BasicLaw from "../../components/evaluation/accessibility/basicLaw";

const Wrap = styled.div``;

export default function Accessibility() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "접근성시험평가", "to" : "/evaluation/accessibility", "isActive": "true", "key": "accessibility" },
                    {"tit" : "키오스크접근성시험평가", "to" : "/evaluation/kiosk", "isActive": "false", "key": "kiosk" },
                    {"tit" : "가전접근성시험평가", "to" : "/evaluation/appliance", "isActive": "false", "key": "appliance" },
                    {"tit" : "모바일접근성시험평가", "to" : "/evaluation/mobile", "isActive": "false", "key": "mobile" },
                ]}
            ></LocalNavigation>
            <EvaluationSummary></EvaluationSummary>
            <BasicLaw></BasicLaw>
        </Wrap>
    )
}