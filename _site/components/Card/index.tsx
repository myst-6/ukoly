import { CSSProperties } from "react";
import { Card as ChakraCard, CardBody, type CardProps as ChakraCardProps } from "@chakra-ui/react";

export interface CardProps extends ChakraCardProps {
  innerStyle?: CSSProperties;
}

export const Card = ({ children, innerStyle, ...props }: CardProps) => {
  return (
    <ChakraCard {...props}>
      <CardBody style={innerStyle}>
        {children}
      </CardBody>
    </ChakraCard>
  )
};