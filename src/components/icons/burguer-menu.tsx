import { useContext } from "react"
import { theme } from "../../theme/theme"
import { ThemeContext } from "../../context/context"

export const BurguerIcon = () => {
    const darkTheme = useContext(ThemeContext)

    return(
        <svg 
            width="30px"
            height="30px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4 18L20 18" stroke={darkTheme ? theme.colors.white : theme.colors.black} stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke={darkTheme ? theme.colors.white : theme.colors.black} stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke={darkTheme ? theme.colors.white : theme.colors.black} stroke-width="2" stroke-linecap="round"/>
        </svg>
    )
}