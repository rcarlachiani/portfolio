import { ContainerFlex } from "../../styles/globalStyles"
import { Github } from "../icons/github"
import { Gmail } from "../icons/gmail"
import { Linkedin } from "../icons/linkedin"
import { Wpp } from "../icons/wpp"
import { NavbarLink } from "./navbarStyles"
interface BurguerMenuProps {
    open: boolean;
}

const BurguerMenu: React.FC<BurguerMenuProps> = ({ open }) => {
    return (
        <ContainerFlex
            display={open ? 'flex' : 'none'}
            width='100%'
            position='relative'
        >
            <ContainerFlex 
                justifycontent='center' 
                position='absolute'
                padding='10px 8px'
                top='60px'
                right='0'
                backgroundcolor='hsla(242.2, 49.4%, 67.45%, 0.1)'
                backgroundblur='blur(4px)'
                boxshadow='0px 4px 4px hsla(0deg, 0%, 0%, 0.1)'
                borderradius='20px'
                zindex={5}
            >
                <NavbarLink 
                    href='https://www.linkedin.com/in/rcarlachiani' 
                    target='_blank'
                >
                    <Linkedin 
                        width='20px'
                    />
                </NavbarLink>
                <NavbarLink 
                    href='https://github.com/rcarlachiani' 
                    target='_blank'
                >
                    <Github 
                        width='20px'
                    />
                </NavbarLink>
                <NavbarLink 
                    href='mailto:rcarlachiani@gmail.com' 
                    target='_blank'
                >
                    <Gmail 
                        width='20px'
                    />
                </NavbarLink>
                <NavbarLink 
                    href='https://api.whatsapp.com/send?phone=5493425273690' 
                    target='_blank'
                >
                    <Wpp 
                        width='20px'
                    />
                </NavbarLink>
            </ContainerFlex>
        </ContainerFlex>
    )
}

export default BurguerMenu