import { SetStateAction, useContext } from "react"
import { ContainerFlex } from "../../styles/globalStyles"
import { Navbar, NavbarItem, NavbarLink } from "../navbar/navbarStyles"
import { DeviceContext, ThemeContext } from "../../context/context"
import { Linkedin } from "../icons/linkedin"
import { Github } from "../icons/github"
import { Gmail } from "../icons/gmail"
import { Wpp } from "../icons/wpp"
import { Dark } from "../icons/dark"
import { Light } from "../icons/light"
import { theme } from "../../theme/theme"
import Burguer from "./burguer"

interface Props {
    setDarkTheme: React.Dispatch<SetStateAction<boolean>>,
    setLanguage: React.Dispatch<SetStateAction<string>>,
}

const NavbarComponent = ({ setDarkTheme, setLanguage }: Props) => {
    const darkTheme = useContext(ThemeContext);
    const { isMobile } = useContext(DeviceContext);

    return (
        <>
            <Navbar 
                width='75%' 
                height='50px' 
                justifycontent='space-between'
                padding='inherit'
            >
                <ContainerFlex>
                    <NavbarItem 
                        alignitems='center'
                        margin='0px 10px 0px 0px' 
                        onClick={() => setDarkTheme(!darkTheme)}
                    >
                        {darkTheme ? (<Light />) : (<Dark />)}
                    </NavbarItem>
                    <NavbarItem 
                        alignitems='center' 
                        margin='0px 10px'
                        color={darkTheme ? theme.colors.white : theme.colors.black} 
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </NavbarItem>
                    <NavbarItem 
                        alignitems='center' 
                        margin='0px 10px'
                        color={darkTheme ? theme.colors.white : theme.colors.black} 
                        onClick={() => setLanguage('es')}
                    >
                        ES
                    </NavbarItem>
                </ContainerFlex>
                {isMobile ? (
                    <Burguer />
                ) : (
                    <ContainerFlex alignitems='center'>
                        <NavbarLink 
                            href='https://www.linkedin.com/in/rcarlachiani' 
                            target='_blank'
                            margin='0px 5px 0px 0px'
                            padding='0px 10px 0px 0px'
                        >
                            <Linkedin />
                        </NavbarLink>
                        <NavbarLink href='https://github.com/rcarlachiani' target='_blank'>
                            <Github />
                        </NavbarLink>
                        <NavbarLink href='mailto:rcarlachiani@gmail.com' target='_blank'>
                            <Gmail />
                        </NavbarLink>
                        <NavbarLink 
                            href='https://api.whatsapp.com/send?phone=5493425273690' 
                            target='_blank'
                            margin='0px 0px 0px 5px'
                            padding='0px 0px 0px 10px'
                        >
                            <Wpp />
                        </NavbarLink>
                    </ContainerFlex>
                )}
                    
            </Navbar>
        </>
    )
}

export default NavbarComponent