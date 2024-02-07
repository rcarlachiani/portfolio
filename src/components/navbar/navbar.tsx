import { SetStateAction, useContext } from "react"
import { ContainerFlex } from "../../styles/globalStyles"
import { Navbar, NavbarItem, NavbarLink } from "../navbar/navbarStyles"
import { DeviceContext } from "../../context/context"
import { Linkedin } from "../icons/linkedin"
import { Github } from "../icons/github"
import { Gmail } from "../icons/gmail"
import { Wpp } from "../icons/wpp"
import { theme } from "../../theme/theme"
import Burguer from "./burguer"

interface Props {
    setLanguage: React.Dispatch<SetStateAction<string>>,
}

const NavbarComponent = ({ setLanguage }: Props) => {
    const { isMobile } = useContext(DeviceContext);

    return (
        <>
           <ContainerFlex
                width='100%'
                position='absolute'
                top='20px'
                zindex={3} 
                padding='0 10vw'
           >
                <Navbar 
                    width='inherit' 
                    height='50px' 
                    justifycontent='space-between'
                    padding='0px 40px'
                >
                    <ContainerFlex>
                        <NavbarItem 
                            alignitems='center' 
                            margin='0px 10px 0px 0px'
                            color={theme.colors.purpleWhite} 
                            onClick={() => setLanguage('en')}
                        >
                            EN
                        </NavbarItem>
                        <NavbarItem 
                            alignitems='center' 
                            margin='0px 10px'
                            color={theme.colors.purpleWhite} 
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
           </ContainerFlex>
        </>
    )
}

export default NavbarComponent