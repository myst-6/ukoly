import { Typography } from "theme";
import { Text, type TextProps } from "../Text";
import Latex from "react-latex-next";

export type SElement = (string | JSX.Element);

export interface STextProps extends Omit<TextProps, "typography"> {
  typography?: Typography;
  inline?: boolean;
  italics?: boolean;
  children: SElement | SElement[];
};

export const SText = ({ 
  typography = "body.medium", 
  italics = false, 
  inline = italics, 
  children, 
  ...props 
}: STextProps) => {
  if (!Array.isArray(children)) children = [children];
  
  // join contiguous groups of strings
  children = children.reduce<SElement[]>((newChildren, el) => {
    if (newChildren.length > 0) {
      const last = newChildren.pop()!;
      if (typeof last === "string" && typeof el === "string") {
        return newChildren.concat(last + el);
      } else {
        return newChildren.concat(last).concat(el);
      }
    } else {
      return [el];
    }
  }, [] as SElement[]);

  return (  
    <>
      <Text typography={typography} style={inline ? { display: "inline" } : {}} {...props}>
        {...children.map((el, idx) => {
          if (typeof el === "string") {
            if (italics) {
              return (
                <i key={idx}>
                  <Latex>{el}</Latex>
                </i>
              );
            } else {
              return (
                <Latex key={idx}>{el}</Latex>
              );
            }
          } else {
            return el;
          }
        })}
      </Text>
    </>
  );
};