type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : never;

type MyFunction = (a: number, b: string) => boolean;
type MyReturnType = ReturnType2<MyFunction>;  // boolean
