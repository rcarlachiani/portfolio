import { useContext } from "react";
import { Text } from "../../styles/globalStyles";
import { ButtonGradient } from "./buttonStyles";
import { LanguageContext } from "../../context/context";
import { TextEN, TextES } from "../../translation/translation";
import { theme } from "../../theme/theme";

const Button = () => {
    const language = useContext(LanguageContext);

    return (
        <>
            <ButtonGradient
                width='110px'
                height='40px'
                alignitems='center'
                justifycontent='center'
            >
                <Text 
                    fontsize='14px'
                    fontsizelg='16px'
                    color={theme.colors.white}
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.goToSite : TextES.goToSite }}
                />
            </ButtonGradient>
        </>
    )
};

export default Button