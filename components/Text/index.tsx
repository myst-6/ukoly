import {
  forwardRef,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import {
  fonts,
  fontSizes,
  fontWeights,
  Typography,
} from "theme";

export interface TextProps extends ChakraTextProps {
  typography: Typography;
  children: React.ReactNode;
}

export const Text = forwardRef<TextProps, "p">(
  ({ typography, children, ...props }, ref) => {
    return (
      <ChakraText
        fontFamily={fonts[typography]}
        fontWeight={fontWeights[typography]}
        fontSize={fontSizes[typography]}
        ref={ref}
        {...props}
      >
        {children}
      </ChakraText>
    );
  }
);
