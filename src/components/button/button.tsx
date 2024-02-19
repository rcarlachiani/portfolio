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
                width='53px'
                height='20px'
                widthsm='65px'
                heightsm='24px'
                widthlg='80px'
                heightlg='28px'
                alignitems='center'
                justifycontent='center'
            >
                <Text 
                    fontSize='10px'
                    fontsizesm='12px'
                    fontsizelg='14px'
                    color={theme.colors.purpleWhite}
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.goToSite : TextES.goToSite }}
                />
            </ButtonGradient>
        </>
    )
};

export default Button