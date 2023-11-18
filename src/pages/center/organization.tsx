import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import Org from "../../components/center/organization/org";

const Wrap = styled.div``;

export default function Organization() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "인사의 글", "to" : "/center/ceomessage", "isActive": "false", "key": "ceomessage" },
                    {"tit" : "조직도", "to" : "/center/organization", "isActive": "true", "key": "oragnization" },
                    {"tit" : "접근성협의체", "to" : "/center/counsultation", "isActive": "false", "key": "councultation" },
                    {"tit" : "오시는 길", "to" : "/center/location", "isActive": "false", "key": "location" },
                ]}
            ></LocalNavigation>
            <Org></Org>
        </Wrap>
    )
}