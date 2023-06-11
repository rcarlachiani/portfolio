import { useContext } from "react"
import { theme } from "../../theme/theme"
import { ThemeContext } from "../../context/context"

interface Props {
    width?: string | number,
    height?: string | number,
}

export const CssIcon: React.FC<Props> = ({ width, height }) => {
    const darkTheme = useContext(ThemeContext)

    return(
        <svg 
            fill={darkTheme ? theme.colors.white : theme.colors.black} 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"  
            width={width ? width : '9vw'} 
            height={height ? height : '9vh'} 
            viewBox="0 0 512 512" 
            enableBackground="new 0 0 512 512" 
            xmlSpace="preserve"
        >
            <g id="c133de6af664cd4f011a55de6b001b19">
            <path 
                display="inline" 
                d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302
                H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606
                l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062
                l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
            />
            </g>
        </svg>
    )
}