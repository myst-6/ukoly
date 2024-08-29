import { CSSProperties, LegacyRef } from "react";
import { Card as ChakraCard, CardBody, type CardProps as ChakraCardProps } from "@chakra-ui/react";

export interface CardProps extends ChakraCardProps {
  cardRef?: LegacyRef<HTMLDivElement>;
  innerStyle?: CSSProperties;
}

export const Card = ({ children, cardRef, innerStyle, ...props }: CardProps) => {
  return (
    <ChakraCard ref={cardRef} {...props}>
      <CardBody style={innerStyle}>
        {children}
      </CardBody>
    </ChakraCard>
  )
};