import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const MainPageImage = styled.img`
    display: flex;
    margin-top: 40px;
    width: 150px;

    @media (${theme.breakpoints.sm}) {
        width: 200px;
    }

    @media (${theme.breakpoints.md}) {
        align-self: center;
        justify-self: start;
        width: 210px;
    }

    @media (${theme.breakpoints.lg}) {
        width: 220px;
    }

    @media (${theme.breakpoints.xl}) {
        width: 300px;
    }
`