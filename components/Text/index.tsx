import {
  forwardRef,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { fonts, fontSizes, fontWeights, Typography } from "theme";

export interface TextProps extends ChakraTextProps {
  typography: Typography | (Typography | null)[];
  children: React.ReactNode;
}

export const Text = forwardRef<TextProps, "p">(
  ({ typography, children, ...props }, ref) => {
    return (
      <ChakraText
        fontFamily={
          Array.isArray(typography)
            ? typography.map(typ => typ === null ? null : fonts[typ])
            : fonts[typography]
        }
        fontWeight={
          Array.isArray(typography)
            ? typography.map(typ => typ === null ? null : fontWeights[typ])
            : fontWeights[typography]
        }
        fontSize={
          Array.isArray(typography)
            ? typography.map(typ => typ === null ? null : fontSizes[typ])
            : fontSizes[typography]
        }
        ref={ref}
        {...props}
      >
        {children}
      </ChakraText>
    );
  }
);
