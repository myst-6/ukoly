import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CodeBlock } from "./CodeBlock";

export const base: string = "/assets/code/";

export interface Language {
  display: string;
  extension: string;
  highlight: string;
}

/*

See here for a list of highlights:
https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD

*/

export const languages: Language[] = [
  {
    display: "C++",
    extension: "cpp",
    highlight: "cpp"
  },
  {
    display: "Python",
    extension: "py",
    highlight: "python"
  }
];

export type SourceCode = null | string;

export interface SCodeBlockProps {
  path: string;
}

export const SCodeBlock = ({ path }: SCodeBlockProps) => {
  const [codes, setCodes] = useState<SourceCode[]>(languages.map(() => null));

  useEffect(() => {
    async function getCode(ext: string): Promise<SourceCode> {
      try {
        const res = await fetch(`${base}${path}.${ext}`);
        if (res.status === 404) {
          // file with this extension not found, no problem!
          return null;
        } else {
          return res.text();
        }
      } catch (error) {
        // some severe error
        console.error("Sorry, there was an error fetching the solution.");
        console.error("Please report this to one of the managers on discord.");
        console.error(error);
        return null;
      }
    }
    (async () => {
      const codes = await Promise.all(languages.map(({ extension }) => getCode(extension)));
      setCodes(codes);
    })();
  }, [path]);

  return (
    <Tabs isFitted defaultIndex={0} variant="line">
      <TabList mb={1}>
        {
          ...languages.filter((_, idx) => codes[idx] !== null).map(({ display, extension }) => {
            return <Tab key={extension}>{display}</Tab>
          })
        }
      </TabList>
      <TabPanels>
        {
          ...Object.entries(codes).filter(([_, code]) => code !== null).map(([idx, code]) => {
            return (
              <TabPanel key={+idx}>
                <CodeBlock 
                  theme={atomOneDark} 
                  code={code!}
                  language={languages[+idx]!.highlight} 
                />
              </TabPanel>
            )
          })
        }
      </TabPanels>
    </Tabs>
  );
}