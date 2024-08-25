import { SText, type STextProps } from "../SText";

export type STitleProps = STextProps;

export const STitle = ({ typography = "title.large", children, ...props }: STextProps) => {
  return <SText typography={typography} mt={4} {...props}>
    {children}
  </SText>
};
