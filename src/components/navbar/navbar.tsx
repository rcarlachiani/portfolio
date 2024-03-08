import { SetStateAction, useContext, useEffect, useState } from "react"
import { ContainerFlex } from "../../styles/globalStyles"
import { Navbar, NavbarItem, NavbarLink } from "../navbar/navbarStyles"
import { DeviceContext } from "../../context/context"
import { Linkedin } from "../icons/linkedin"
import { Github } from "../icons/github"
import { Gmail } from "../icons/gmail"
import { Wpp } from "../icons/wpp"
import { theme } from "../../theme/theme"
import { BurguerIcon } from "../icons/burguer-menu"
import BurguerMenu from "./burguer"

interface Props {
    setLanguage: React.Dispatch<SetStateAction<string>>,
}

const NavbarComponent = ({ setLanguage }: Props) => {
    const { isMobile } = useContext(DeviceContext);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        !isMobile && setOpen(false)
    }, [isMobile])

    return (
        <>
           <ContainerFlex
                flexdirection='column'
                width='100%'
                position='absolute'
                top='20px'
                zindex={3} 
                padding='0 10vw'
           >
                <BurguerMenu open={open}/>
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
                        <ContainerFlex 
                            justifycontent='center' 
                            flexdirection='column'
                            alignitems='center'
                            onClick={() => setOpen(!open)}
                        >
                            <BurguerIcon />
                        </ContainerFlex>
                    ) : (
                        <ContainerFlex alignitems='center'>
                            <NavbarLink 
                                href='https://www.linkedin.com/in/rcarlachiani' 
                                target='_blank'
                            >
                                <Linkedin />
                            </NavbarLink>
                            <NavbarLink href='https://github.com/rcarlachiani' target='_blank' margin='0px 8px 0px 16px'>
                                <Github />
                            </NavbarLink>
                            <NavbarLink href='mailto:rcarlachiani@gmail.com' target='_blank' margin='0px 16px 0px 8px'>
                                <Gmail />
                            </NavbarLink>
                            <NavbarLink 
                                href='https://api.whatsapp.com/send?phone=5493425273690' 
                                target='_blank'
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