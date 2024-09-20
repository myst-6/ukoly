import { Test } from "content";

export type CheckerStatus = "WA" | "AC" | "PE";

export interface CheckerResult {
  status: CheckerStatus;
  message: string;
}

export type Checker = (test: Test, out: string) => CheckerResult;