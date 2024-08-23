import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import { CopyBlockProps } from "react-code-blocks/dist/components/CopyBlock";

export const base: string = "/assets/code/";

export interface Language {
  display: string;
  extension: string;
}

export const languages: Language[] = [
  {
    display: "C++",
    extension: "cpp",
  },
  {
    display: "Python",
    extension: "py"
  }
];

export type SourceCode = null | string;
export interface SCodeBlockProps extends Omit<Omit<CopyBlockProps, "text">, "language"> {
  path: string;
}

export const SCodeBlock = ({ path, ...props }: SCodeBlockProps) => {
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
          ...codes.filter(code => code !== null).map((code, idx) => {
            return (
              <TabPanel key={idx}>
                <CopyBlock
                  text={code} 
                  language={languages[idx]!.extension}
                  theme={atomOneDark} 
                  customStyle={{
                    maxHeight: "30em",
                    overflowY: "auto",
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                  }}
                  showLineNumbers 
                  {...props}
                />
              </TabPanel>
            )
          })
        }
      </TabPanels>
    </Tabs>
  );
}