import { Text } from "../../styles/globalStyles";
import { ButtonGradient } from "./buttonStyles";
import { theme } from "../../theme/theme";

interface ButtonProps {
    buttonText: string
    width?: string
    height?: string
    widthsm?: string
    heightsm?: string
    widthlg?: string
    heightlg?: string
}

const Button = ({
  buttonText,
  width,
  height,
  widthsm,
  heightsm,
  widthlg,
  heightlg,
}: ButtonProps) => {

  return (
    <>
      <ButtonGradient
        width={width}
        height={height}
        widthsm={widthsm}
        heightsm={heightsm}
        widthlg={widthlg}
        heightlg={heightlg}
        alignitems='center'
        justifycontent='center'
      >
        <Text
          fontSize='10px'
          fontsizesm='12px'
          fontsizelg='14px'
          color={theme.colors.purpleWhite}
          dangerouslySetInnerHTML={{ __html: buttonText }}
        />
      </ButtonGradient>
    </>
  );
};

export default Button