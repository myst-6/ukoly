import { SiCodeforces, SiDiscord, SiGithub } from "react-icons/si";
import { Image } from "components/Image"

export interface PlatformInfo {
  icon: JSX.Element;
  base: string;
  label: string;
}

export const platforms = {
  codeforces: {
    icon: <SiCodeforces />,
    base: "https://codeforces.com/profile/",
    label: "Codeforces",
  } as PlatformInfo,
  github: {
    icon: <SiGithub />,
    base: "https://github.com/",
    label: "Github",
  } as PlatformInfo,
  discord: {
    icon: <SiDiscord />,
    base: "https://discord.com/users/",
    label: "Discord",
  } as PlatformInfo,
  ioi: {
    icon: <Image src="/assets/images/ioi.png" />,
    base: "https://stats.ioinformatics.org/people/",
    label: "IOI",
  } as PlatformInfo,
};

export interface PlatformInstance {
  platform: PlatformInfo;
  handle: string;
}

export type Socials = PlatformInstance[];