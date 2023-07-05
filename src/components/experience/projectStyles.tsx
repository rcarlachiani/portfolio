import { styled } from "styled-components";
import { theme } from "../../theme/theme";

export const ProjectImage = styled.img`
    display: flex;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
`

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${theme.colors.black};
`

export const CardWrapper = styled.div`
    width: 300px;
    height: 400px;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(5px);
    box-shadow: 8px 11px 15px -9px rgba(0,0,0,0.45);
    border-radius: 8px;
    padding: 15px;
    margin: 0px 30px;
`

export const SliderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-self: baseline;
    margin: 25px 0px 0px 0px;
    max-width: 300px;

    @media (min-width: 700px) {
        max-width: 500px;
    }

    @media (min-width: 1000px) {
        max-width: 700px;
    }

    @media (min-width: 1280px) {
        max-width: 900px;
    }

    @media (min-width: 1440px) {
        max-width: 63vw;
    }
`