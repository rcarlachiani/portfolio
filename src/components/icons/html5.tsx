import { useContext } from "react"
import { theme } from "../../theme/theme"
import { ThemeContext } from "../../context/context"

export const HtmlIcon = () => {
    const darkTheme = useContext(ThemeContext)

    return(
        <svg 
            width="80px" 
            height="80px" 
            viewBox="-1 0 20 20" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill={darkTheme ? theme.colors.white : theme.colors.black}>
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path 
                            d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" 
                            id="html-[#124]"
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}