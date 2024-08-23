export type Transform = (inp: string) => string;
export type TransformFactory = (...inps: string[]) => string;

export const make =
  (transform: Transform): TransformFactory =>
  (...inps) =>
    transform(inps.join(""));

export const op: TransformFactory = make((inp) => `\\operatorname{${inp}}`);
export const brace: TransformFactory = make((inp) => `{${inp}}`);
