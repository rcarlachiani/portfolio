import { styled } from "styled-components";

export const ProfileImage = styled.img`
    display: flex;
    border-radius: 50%;
    width: 25vw;
    height: auto;
    justify-self: baseline;

    @media (max-width: 576px) {
        width: 45vw;
        height: auto;
        justify-self: unset;
        align-self: baseline;
    }
`