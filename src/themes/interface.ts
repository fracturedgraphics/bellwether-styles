export interface Font {
    family: string;
    weight: number;
    size: string;
    line_height: number;
    letter_spacing: string;
}

export interface Theme {
    palette: {
        type: 'dark' | 'light';
        color: {
            primary: string;
            primary_variant: string;
            secondary: string;
            secondary_variant: string;
        };
        surfaces: {
            background: string;
            surface: string;
        };
        states: {
            error: string;
            warning: string;
            info: string;
            success: string;
        };
        content: {
            on_primary: string;
            on_secondary: string;
            on_surface: string;
            on_error: string;
            on_warning: string;
            on_info: string;
            on_success: string;
        };
        charts: {
            color1: string;
            color2: string;
            color3: string;
            color4: string;
            color5: string;
        };
    };
    typography: {
        default: Font;
        h1: Font;
        h2: Font;
        h3: Font;
        h4: Font;
        h5: Font;
        subtitle1: Font;
        subtitle2: Font;
        body1: Font;
        body2: Font;
        button: Font;
        caption: Font;
        overline: Font;
    };
}
