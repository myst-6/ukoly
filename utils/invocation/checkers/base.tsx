import { Test } from "content";

export type CheckerStatus = "WA" | "AC" | "PE" | "PA";

export interface CheckerResult {
  status: CheckerStatus;
  message: string;
  partial?: number; // percentage of points to receive, should only exist iff status is PA
}

export type Checker = (test: Test, out: string) => CheckerResult;