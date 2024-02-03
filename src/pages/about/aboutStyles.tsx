import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const AboutImage = styled.img`
    display: flex;
    width: 180px;

    @media (${theme.breakpoints.sm}) {
        width: 260px;
    }

    @media (${theme.breakpoints.md}) {
        width: 260px;
    }

    @media (${theme.breakpoints.lg}) {
        width: 280px;
    }

    @media (${theme.breakpoints.xl}) {
        width: 19vw;
    }
`