import { CSSProperties } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { FaRegCopy } from "react-icons/fa";
import { Box, type BoxProps } from "../Box";
import { IconButton } from "../IconButton";

export interface Theme {
  [key: string]: CSSProperties;
}

export interface CodeBlockProps extends BoxProps {
  code: string;
  language: string;
  theme: Theme;
}

export const CodeBlock = ({ code, language, theme }: CodeBlockProps) => {
  return (
    <Box >
      <IconButton
        aria-label="Copy Code" 
        icon={<FaRegCopy />} 
        style={{
          position: "absolute",
          right: 64,
          marginTop: 16
        }}
        onClick={() => navigator.clipboard.writeText(code)}
      />
      <SyntaxHighlighter
        language={language}
        wrapLines={false}
        wrapLongLines={false}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        style={theme}
        customStyle={{
          border: "1px solid #c3c3c3",
          borderRadius: "5px",
          maxHeight: "30em",
          overflowY: "scroll",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}