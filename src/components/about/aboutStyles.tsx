import { styled } from "styled-components";

export const ProfileImage = styled.img`
    display: flex;
    border-radius: 50%;
    max-width: 70%;
    height: auto;
    padding: 0px 0px 0px 20px;

    @media (max-width: 1080px) {
        max-width: 50%;
        height: auto;
    }

    @media (max-width: 576px) {
        max-width: 60%;
        height: auto;
        padding: 20px 0px 0px 0px;
    }
`