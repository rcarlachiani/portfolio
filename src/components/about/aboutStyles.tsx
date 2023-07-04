import { styled } from "styled-components";

export const ProfileImage = styled.img`
    display: flex;
    border-radius: 50%;
    max-width: 70%;
    height: auto;
    justify-self: baseline;

    @media (max-width: 576px) {
        max-width: 50%;
        height: auto;
        justify-self: unset;
        align-self: baseline;
    }
`