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
                width='60px'
                height='20px'
                widthsm='80px'
                heightsm='25px'
                alignitems='center'
                justifycontent='center'
            >
                <Text 
                    fontSize='10px'
                    fontsizesm='12px'
                    color={theme.colors.purpleWhite}
                    dangerouslySetInnerHTML={{__html: language === 'en' ? TextEN.goToSite : TextES.goToSite }}
                />
            </ButtonGradient>
        </>
    )
};

export default Button