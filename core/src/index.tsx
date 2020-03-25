import React from 'react'
export { Hero } from './Hero'
export { Heading } from './Heading'
export { SubHeading } from './SubHeading'
export { Feature } from './Feature'
export { HowItWorks } from './HowItWorks'
export { FeaturesList } from './FeaturesList'
export { NavBar } from './NavBar'
export * from './layout'
import {
    ThemeProvider,
    theme as defaultTheme,
    DefaultTheme,
    Stack,
    CSSReset,
} from '@chakra-ui/core'
import { useTheme } from 'emotion-theming'
import { Col } from './layout'

export const LandingProvider = ({ children }) => {
    const existingTheme = useTheme()
    if (existingTheme && Object.keys(existingTheme).length) {
        console.log(existingTheme)
        return children
    }
    const theme: DefaultTheme = {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            primary: 'purple',
        } as any,
        sizes: {
            ...defaultTheme.sizes,
            pageContainer: '1200px',
        } as any,
        fonts: {
            ...defaultTheme.fonts,
            body: 'Roboto',
            heading: 'Roboto',
        },
    }
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Stack spacing='60px'>{children}</Stack>
        </ThemeProvider>
    )
}
