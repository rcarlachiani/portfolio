import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const MainPageImage = styled.img`
    display: flex;
    width: 200px;

    @media (${theme.breakpoints.sm}) {
        width: 250px;
    }

    @media (${theme.breakpoints.md}) {
        width: 230px;
    }

    @media (${theme.breakpoints.lg}) {
        width: 280px;
    }

    @media (${theme.breakpoints.xl}) {
        width: 300px;
    }

    @media (${theme.breakpoints.xxl}) {
        width: 380px;
    }
`