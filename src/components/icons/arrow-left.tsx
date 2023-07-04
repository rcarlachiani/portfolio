import { useContext } from "react"
import { theme } from "../../theme/theme"
import { ThemeContext } from "../../context/context"

interface Props {
    width?: string | number,
    height?: string | number,
}

export const ArrLeft: React.FC<Props> = ({ width, height }) => {
    const darkTheme = useContext(ThemeContext)

    return(
        <svg 
            width={width ? width : '9vw'} 
            height={height ? height : '9vh'} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> 
                <path 
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z" 
                    fill={darkTheme ? theme.colors.white : theme.colors.black}
                /> 
            </g>
        </svg>
    )
}