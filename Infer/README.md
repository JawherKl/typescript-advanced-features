# Infer Type in TypeScript

`infer` is used within conditional types to create new types based on the structure of an existing type.

## Syntax

```typescript
T extends infer U ? X : Y
```
#### 5.2 `InferType/inferTypeExample.ts`

```typescript
// Example 1: Using infer to Extract Return Types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type MyFunction = (a: number, b: string) => boolean;
type MyReturnType = ReturnType<MyFunction>;  // boolean

console.log(MyReturnType);  // boolean
```