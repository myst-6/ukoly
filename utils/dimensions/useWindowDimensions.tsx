import { useEffect, useState } from "react";
import { Dimensions, empty } from "./base";

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>(empty);

  useEffect(() => {
    function update() {
      const { innerWidth: width, innerHeight: height } = window;
      console.log("window", {width,height});
      setDimensions({ width, height });
    }
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  return { dimensions };
}