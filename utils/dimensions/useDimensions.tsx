import { useCallback, useState } from "react";
import { Dimensions, empty } from "./base";

export function useDimensions<T extends HTMLElement>() {
  const [dimensions, setDimensions] = useState<Dimensions>(empty);

  const ref = useCallback((node: T) => {
    if (node === null) {
      setDimensions(empty);
    } else {
      // console.log("hehe", node);
      const { clientWidth: width, clientHeight: height } = node;
      setDimensions({ width, height });
    }
  }, []);

  return { ref, dimensions };
}