export interface PageInfo {
  display: string;
  path: string;
}

export const pages = {
  home: {
    display: "Home",
    path: "/"
  } as PageInfo,
  bio1: {
    display: "BIO Round 1",
    path: "bio1",
  } as PageInfo,
  bio2: {
    display: "BIO Round 2",
    path: "bio2"
  } as PageInfo,
  grader: {
    display: "BIO Grader",
    path: "grader"
  } as PageInfo,
  pctc: {
    display: "PCTC",
    path: "pctc"
  } as PageInfo,
};

export type Pages = typeof pages;
