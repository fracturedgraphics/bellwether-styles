export { flat, material, x11 } from './colors';
export { Font, Palette, Theme } from './themes';

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { Theme } from './themes';

const styled = {
    default: styledComponents.default,
    css: styledComponents.css,
    createGlobalStyle: styledComponents.createGlobalStyle,
    keyframes: styledComponents.keyframes,
    ThemeProvider: styledComponents.ThemeProvider,
} as ThemedStyledComponentsModule<Theme>;

const { css, createGlobalStyle, keyframes, ThemeProvider } = styled;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled.default;
