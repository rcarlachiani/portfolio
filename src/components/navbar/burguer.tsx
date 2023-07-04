import { useState } from "react"
import { ContainerFlex } from "../../styles/globalStyles"
import { BurguerIcon } from "../icons/burguer-menu"
import { Github } from "../icons/github"
import { Gmail } from "../icons/gmail"
import { Linkedin } from "../icons/linkedin"
import { Wpp } from "../icons/wpp"
import { NavbarLink } from "./navbarStyles"


const Burguer = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ContainerFlex 
                justifycontent='center' 
                flexdirection='column'
                alignitems='center'
                onClick={() => setOpen(!open)}
            >
                <BurguerIcon />
                <ContainerFlex 
                    justifycontent='center' 
                    flexdirection='column'
                    position='absolute'
                    padding='0px 5px'
                    top='40px'
                    backgroundblur='blur(4px)'
                    borderradius='8px'
                    display={open ? 'flex' : 'none'}
                >
                    <NavbarLink 
                        href='https://www.linkedin.com/in/rcarlachiani' 
                        target='_blank'
                        margin='5px 0px'
                        padding='10px 0px 5px 0px'
                    >
                        <Linkedin 
                            width='20px'
                            height='20px'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        href='https://github.com/rcarlachiani' 
                        target='_blank'
                        margin='5px 0px'
                        padding='5px 0px'
                    >
                        <Github 
                            width='20px'
                            height='20px'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        href='mailto:rcarlachiani@gmail.com' 
                        target='_blank'
                        margin='5px 0px'
                        padding='5px 0px'
                    >
                        <Gmail 
                            width='20px'
                            height='20px'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        href='https://api.whatsapp.com/send?phone=5493425273690' 
                        target='_blank'
                        margin='5px 0px'
                        padding='5px 0px 10px 0px'
                    >
                        <Wpp 
                            width='20px'
                            height='20px'
                        />
                    </NavbarLink>
                </ContainerFlex>
            </ContainerFlex>
        </>
    )
}

export default Burguer