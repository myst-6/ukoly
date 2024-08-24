export type Transform = (...inps: string[]) => string;

export const op: Transform = inp => `\\operatorname{${inp}}`;
export const brace: Transform = inp => `{${inp}}`;
export const floor: Transform = inp => `\\lfloor{${inp}}\\rfloor`;
export const ceil: Transform = inp => `\\lceil{${inp}}\\rceil`;
export const frac: Transform = (inp, inp2) => `\\frac{${inp}}{${inp2}}`;
