import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import CEO from "../../components/center/ceomessage/ceo";
import CenterSummary from "../../components/center/ceomessage/centerSummary";

const Wrap = styled.div``;

export default function CEOMessage() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "인사의 글", "to" : "/center/ceomessage", "isActive": "true", "key": "ceomessage" },
                    {"tit" : "조직도", "to" : "/center/organization", "isActive": "false", "key": "oragnization" },
                    {"tit" : "접근성협의체", "to" : "/center/counsultation", "isActive": "false", "key": "councultation" },
                    {"tit" : "오시는 길", "to" : "/center/location", "isActive": "false", "key": "location" },
                ]}
            ></LocalNavigation>
            <CEO></CEO>
            <CenterSummary></CenterSummary>
        </Wrap>
    )
}