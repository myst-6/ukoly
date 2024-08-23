import { useEffect, useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { CopyBlockProps } from "react-code-blocks/dist/components/CopyBlock";

const base: string = "/assets/code/";

export interface SCodeProps extends Omit<Omit<CopyBlockProps, "text">, "language"> {
  path: string;
}

export const SCode = ({ path, ...props }: SCodeProps) => {
  const [code, setCode] = useState("// Loading...");

  useEffect(() => {
    fetch(base + path)
      .then(response => response.text())
      .then(data => setCode(data))
      .catch(error => console.error("Error fetching the text file:", error));
  }, [path]);

  return (
    <CopyBlock 
      text={code} 
      language="cpp" 
      theme={atomOneDark} 
      customStyle={{
        maxHeight: "30em",
        overflowY: "auto",
        fontSize: "0.8rem",
      }}
      showLineNumbers 
      {...props}
    />
  );
}