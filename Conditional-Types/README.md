# Conditional Types in TypeScript

Conditional types allow you to define a type based on a condition. It's similar to a ternary operator in JavaScript.

## Syntax

```typescript
T extends U ? X : Y
```



#### 3.2 `ConditionalTypes/conditionalTypesExample.ts`

```typescript
// Example 1: Basic Conditional Type
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"

console.log(Test1); // "Yes"
console.log(Test2); // "No"

// Example 2: Conditional Types in Functions
function log<T>(value: T): T extends string ? string : number {
    if (typeof value === "string") {
        return `String: ${value}` as any;
    } else {
        return value * 2 as any;
    }
}

console.log(log("Hello")); // "String: Hello"
console.log(log(42));      // 84
```