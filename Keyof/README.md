# `keyof` in TypeScript

The `keyof` operator in TypeScript creates a type that consists of all the keys of an object type.

## Syntax

```typescript
keyof T
```


#### 7.2 `Keyof/keyofExample.ts`

```typescript
// Example 1: Basic `keyof` Usage
interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User; // "name" | "age"

console.log("User Keys:", UserKeys);  // "name" | "age"

// Example 2: Using `keyof` with Objects
const user = {
    name: "Alice",
    age: 25,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getProperty(user, "name"));  // Alice
console.log(getProperty(user, "age"));   // 25

// Example 3: Using `keyof` with Strings
type Fruit = "apple" | "banana" | "cherry";
type FruitKeys = keyof Fruit;  // "apple" | "banana" | "cherry"

console.log("Fruit Keys:", FruitKeys);  // "apple" | "banana" | "cherry"
```