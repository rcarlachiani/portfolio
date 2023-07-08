import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const AboutImage = styled.img`
    display: flex;
    width: 150px;

    @media (${theme.breakpoints.sm}) {
        width: 200px;
    }

    @media (${theme.breakpoints.md}) {
        width: 220px;
    }

    @media (${theme.breakpoints.lg}) {
        width: 240px;
    }

    @media (${theme.breakpoints.xl}) {
        width: 290px;
    }
`