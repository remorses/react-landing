import React, { FC, Fragment } from 'react'
import {
    ColorModeProvider,
    CSSReset,
    DefaultTheme,
    Stack,
    theme as defaultTheme,
    ThemeProvider,
} from '@chakra-ui/core'
import { useTheme } from 'emotion-theming'

export interface ThemeExtension extends DefaultTheme {
    colors: {
        primary: string
        secondary: string
    } & DefaultTheme['colors']
    sizes: {
        pageContainer: any
    } & DefaultTheme['sizes']
}

export interface LandingProviderProps {
    dark?: boolean
    primary?: string
    secondary?: string
    children?: any
}

/*
should customize 
- font type
- font family
- buttons border radius
- primary color for buttons, illustrations, etc
- secondary color, for gradients, etc
- dark background mode
- black color for text, ...
- white color for text, ... if dark mode
*/

export function LandingProvider({
    dark = false,
    primary = 'purple',
    secondary = 'purple',
    children,
}: LandingProviderProps) {
    const existingTheme = useTheme()
    // if (existingTheme && Object.keys(existingTheme).length) {
    //     console.log(existingTheme)
    //     return <Fragment>children</Fragment>
    // }
    const theme: ThemeExtension = {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors,
            primary,
            secondary,
        },
        sizes: {
            ...defaultTheme.sizes,
            pageContainer: '1200px',
        },
        fonts: {
            ...defaultTheme.fonts,
            body: 'Roboto',
            heading: 'Roboto',
        },
    }
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider value={dark ? 'dark' : 'light'}>
                <CSSReset />
                <Stack spacing='60px'>{children}</Stack>
            </ColorModeProvider>
        </ThemeProvider>
    )
}
