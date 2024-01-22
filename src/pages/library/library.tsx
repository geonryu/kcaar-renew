import styled from "styled-components";
import Libraries from "../../components/library/libraries";

const Wrap = styled.div``;

export default function Library() {
    return (
        <Wrap>
            {/* <LibrarySample></LibrarySample> */}
            <Libraries></Libraries>
        </Wrap>
    )
}