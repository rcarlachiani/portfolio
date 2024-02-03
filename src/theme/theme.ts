import { DefaultTheme } from "styled-components"

const colors = {
    purpleWhite: '#f8f8ff',
    purpleBlack: '#1b0f23',
    purple: '#7928ca',
    purpleBackground: '#1b0f23',
    purpleParticles: '#9450d4',
    rose: '#ff0080'
}

const shadows = {
    mainShadow: 'drop-shadow(2px 4px 2px hsla(0deg, 0%, 0%, 0.15))',
    boxShadow: '2px 4px 2px hsla(0deg, 0%, 0%, 0.15)'
}

const breakpoints = {
    sm: 'min-width: 478px',
    md: 'min-width: 769px',
    lg: 'min-width: 992px',
    xl: 'min-width: 1200px',
    xxl: 'min-width: 1600px',
}

const theme: DefaultTheme = {
    colors: colors,
    shadows: shadows,
    breakpoints: breakpoints,
}

export { theme }