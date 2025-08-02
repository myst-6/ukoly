export const invocationStatuses = [
	"OK",
	"TLE",
	"MLE",
	"CE",
	"RE",
	"RJ",
	"TS",
] as const;

export type InvocationStatus = (typeof invocationStatuses)[number];

export interface InvocationResult {
	status: InvocationStatus;
	stdout?: string;
	message: string;
	time: number;
	memory: number;
}

export const waiting: InvocationResult = {
	status: "TS",
	message: "Waiting...",
	time: 0,
	memory: 0,
};

export interface SubmissionData {
	verdict: InvocationStatus;
	stdout: string;
	stderr: string;
	compileOutput: string;
	time: number;
	memory: number;
}