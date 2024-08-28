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
    display: "Round 1",
    path: "bio1",
  } as PageInfo,
  bio2: {
    display: "Round 2",
    path: "bio2"
  } as PageInfo
};

export type Pages = typeof pages;