import { useEffect, useState } from "react";
import { Dimensions, empty } from "./base";

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>(empty);

  useEffect(() => {
    function update() {
      const { innerWidth: width, innerHeight: height } = window;
      setDimensions({ width, height });
    }
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  return { dimensions };
}