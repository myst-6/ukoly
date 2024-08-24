import * as React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import CopyButton from "./copyButton";

type Props = {
  code: string;
  language: string;
  style: any;
};
export default function CodeBlock({ code, language, style }: Props) {
  return (
    <div className="CodeBlockClass">
      <CopyButton code={code} /> 
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLines={false}
        wrapLongLines={false}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        customStyle={{
          border: "1px solid #c3c3c3",
          borderRadius: "5px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}