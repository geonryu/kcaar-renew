import styled from "styled-components";
import LocalNavigation from "../../components/global/localnavigation";
import Map from "../../components/center/map/map";

const Wrap = styled.div``;

export default function Location() {
    return (
        <Wrap>
            <LocalNavigation 
                LNB={[
                    {"tit" : "인사의 글", "to" : "/center/ceomessage", "isActive": "false", "key": "ceomessage" },
                    {"tit" : "조직도", "to" : "/center/organization", "isActive": "false", "key": "oragnization" },
                    {"tit" : "접근성협의체", "to" : "/center/counsultation", "isActive": "false", "key": "councultation" },
                    {"tit" : "오시는 길", "to" : "/center/location", "isActive": "true", "key": "location" },
                ]}
            ></LocalNavigation>
            <Map></Map>
        </Wrap>
    )
}