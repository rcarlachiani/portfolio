import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const MainPageImage = styled.img`
    display: flex;
    width: 180px;

    @media (${theme.breakpoints.sm}) {
        width: 220px;
    }

    @media (${theme.breakpoints.md}) {
        align-self: center;
        justify-self: start;
        width: 240px;
    }

    @media (${theme.breakpoints.lg}) {
        width: 260px;
    }

    @media (${theme.breakpoints.xl}) {
        width: 18vw;
    }
`