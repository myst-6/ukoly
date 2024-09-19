export type CheckerStatus = "WA" | "AC" | "PE";

export interface CheckerResult {
  status: CheckerStatus;
  output: string;
  message: string;
}

export type Checker = (exp: string, got: string) => CheckerResult;