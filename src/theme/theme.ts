import { DefaultTheme } from "styled-components"

const colors = {
    white: '#FFFFFF',
    whiteBackground: "#fbfbf9",
    black: '#242522',
    tomato: '#e74645',
    orange: '#fb7756',
    darkyellow: '#facd60',
    lightyellow: '#fdfa66',
    aquagreen: '#1ac0c6',
    purple: '#7928ca',
    rose: '#ff0080'
}

const shadows = {
    mainShadow: 'drop-shadow(2px 4px 2px hsla(0deg, 0%, 0%, 0.15))',
    boxShadow: '2px 4px 2px hsla(0deg, 0%, 0%, 0.15)'
}

const breakpoints = {
    sm: 'min-width: 478px',
    md: 'min-width: 768px',
    lg: 'min-width: 992px',
    xl: 'min-width: 1200px',
}

const theme: DefaultTheme = {
    colors: colors,
    shadows: shadows,
    breakpoints: breakpoints,
}

export { theme }