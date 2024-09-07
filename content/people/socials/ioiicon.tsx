import { Icon, useColorMode, Image } from "@chakra-ui/react";

const ThemedIcon = () => {
  const { colorMode } = useColorMode();

  return (
        <Image 
          src={colorMode === "light" ? "/assets/images/ioidark.webp" : "/assets/images/ioilight.webp"} 
          alt="Themed Icon" 
          height="1em"
        />
      
  );
};

export default ThemedIcon;
