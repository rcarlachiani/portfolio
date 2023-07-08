import { styled } from "styled-components";
import { theme } from "../../theme/theme";

interface PropsCardWrapper {
    backgroundcolor?: string,
}

export const ProjectImage = styled.img`
    display: block;
    width: 180px;
    border-radius: 8px;

    @media (${theme.breakpoints.sm}) {
        width: 220px;
    } 
    
    @media (${theme.breakpoints.md}) {
        width: 280px;
    } 
    
    @media (${theme.breakpoints.lg}) {
        
    } 

    @media (${theme.breakpoints.xl}) {
       
    }  
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${theme.colors.black};
`

export const CardWrapper = styled.div<PropsCardWrapper>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
`

export const SliderWrapper = styled.div`
    display: flex;
    width: 70%;
    height: 65vh;
`