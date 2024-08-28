import { theme as ChakraTheme } from "@chakra-ui/react";

export const ALL_TYPOGRAPHIES = [
    "display.large",
    "display.medium",
    "display.small",
    "title.large",
    "title.medium",
    "title.small",
    "body.large",
    "body.medium",
    "body.small",
    "caption",
    "button",
] as const;

type TypographyTuple = typeof ALL_TYPOGRAPHIES;
export type Typography = TypographyTuple[number];

type Fonts = {
    [key in Typography]: string;
};

export const fonts: Fonts = {
    "display.large": `"Roboto", ${ChakraTheme.fonts.heading}`,
    "display.medium": `"Roboto", ${ChakraTheme.fonts.heading}`,
    "display.small": `"Roboto", ${ChakraTheme.fonts.heading}`,
    "title.large": `"Roboto", ${ChakraTheme.fonts.body}`,
    "title.medium": `"Roboto", ${ChakraTheme.fonts.body}`,
    "title.small": `"Roboto", ${ChakraTheme.fonts.body}`,
    "body.large": `"Roboto", ${ChakraTheme.fonts.body}`,
    "body.medium": `"Roboto", ${ChakraTheme.fonts.body}`,
    "body.small": `"Roboto", ${ChakraTheme.fonts.body}`,
    "caption": `"Roboto", ${ChakraTheme.fonts.body}`,
    "button": `"Roboto", ${ChakraTheme.fonts.body}`,
};

type FontWeights = {
    [key in Typography]: number;
};

export const fontWeights: FontWeights = {
    "display.large": 500,
    "display.medium": 500,
    "display.small": 500,
    "title.large": 400,
    "title.medium": 400,
    "title.small": 400,
    "body.large": 400,
    "body.medium": 400,
    "body.small": 400,
    caption: 400,
    button: 500,
};

type FontSizes = {
    [key in Typography]: string;
};
  
export const fontSizes: FontSizes = {
    "display.large": "3rem",
    "display.medium": "2.5rem",
    "display.small": "1.75rem",
    "title.large": "1.5rem",
    "title.medium": "1.25rem",
    "title.small": "0.875rem",
    "body.large": "1.25rem",
    "body.medium": "1rem",
    "body.small": "0.875rem",
    caption: "0.75rem",
    button: "0.875rem",
};

