import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const ProjectImage = styled.img`
    display: block;
    width: inherit;
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${theme.colors.black};
`

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
`

export const SliderWrapper = styled.div`
    display: flex;
    max-width: 320px;
    height: 60vh;

    @media (${theme.breakpoints.sm}) {
        max-width: 600px;
    } 
 
    @media (${theme.breakpoints.lg}) {
        max-width: 650px;
    }

    @media (${theme.breakpoints.xl}) {
        max-width: 80%;
    }  

    @media (${theme.breakpoints.xxl}) {
        max-width: 70%;
    }  
`