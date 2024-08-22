import { SiCodeforces, SiDiscord, SiGithub } from "react-icons/si";

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
  }
};

export interface PlatformInstance {
  platform: PlatformInfo;
  handle: string;
}

export type Socials = PlatformInstance[];