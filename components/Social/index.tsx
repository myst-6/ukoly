import { useToast } from "@chakra-ui/react";
import { IconButton, type IconButtonProps } from "../IconButton";
import { PlatformInstance } from "content";

export interface SocialProps extends Omit<IconButtonProps, "aria-label"> {
  social: PlatformInstance;
}

export const Social = ({ social, ...props }: SocialProps) => {
  const toast = useToast();
  return (
    <IconButton 
      variant="ghost"
      icon={social.platform.icon} 
      aria-label={social.platform.label}
      onClick={() => {
        if (social.platform.base) {
          window.open(social.platform.base + social.handle, "_blank", "noopener,noreferrer");
        } else {
          toast({
            title: `Their handle is ${social.handle} on ${social.platform.label}`,
            status: "info",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        }
      }}
      {...props}
    />
  );
};