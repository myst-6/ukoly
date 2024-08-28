import { IconButton, type IconButtonProps } from "../IconButton";
import { PlatformInstance } from "content";

export interface SocialProps extends Omit<IconButtonProps, "aria-label"> {
  social: PlatformInstance;
}

export const Social = ({ social, ...props }: SocialProps) => {
  return (
    <IconButton 
      variant="ghost"
      icon={social.platform.icon} 
      aria-label={social.platform.label}
      onClick={() => {
        window.open(social.platform.base + social.handle, "_blank", "noopener,noreferrer");
      }}
      {...props}
    />
  );
};