import { Image, type ImageProps } from "../Image";

export interface LogoProps extends ImageProps {
  // no new attributes yet
}

export const Logo = ({ ...props }: LogoProps) => {
  return <Image src="./bio99-logo.gif" alt="BIO" height={10} {...props} />;
};