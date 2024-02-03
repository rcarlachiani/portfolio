import { styled } from "styled-components";

export const ParticlesBlur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5px);
    pointer-events: none;
`