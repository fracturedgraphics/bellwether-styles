export type Font = {
    family: string;
    weight: number;
    size: string;
    line_height: number;
    letter_spacing: string;
};

export type Palette = {
    color: string;
    text_color: string;
    border_color: string;
    hover_color: string;
};

export type Theme = {
    palette: {
        type: 'dark' | 'light';
        primary: Palette;
        primary_variant: Palette;
        secondary: Palette;
        secondary_variant: Palette;
        error: Palette;
        warning: Palette;
        info: Palette;
        success: Palette;
        background: Palette;
        surface: Palette;
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
};
