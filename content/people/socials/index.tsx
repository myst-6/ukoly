import { SiCodeforces, SiDiscord, SiGithub } from "react-icons/si";
import IOIIcon from "./ioiicon";

export interface PlatformInfo {
  icon: JSX.Element;
  // use null if the platform doesn't support linking to profiles
  base: string | null;
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
    base: null,
    label: "Discord",
  } as PlatformInfo,
  ioi: {
    icon: <IOIIcon />,
    base: "https://stats.ioinformatics.org/people/",
    label: "IOI",
  } as PlatformInfo,
};

export interface PlatformInstance {
  platform: PlatformInfo;
  handle: string;
}

export type Socials = PlatformInstance[];