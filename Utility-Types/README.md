# Utility Types in TypeScript

TypeScript provides several built-in utility types to assist with common type transformations. These types include:

1. `Partial<T>` – Makes all properties of `T` optional.
2. `Required<T>` – Makes all properties of `T` required.
3. `Readonly<T>` – Makes all properties of `T` readonly.
4. `Record<K, T>` – Constructs an object type with a set of properties `K` of type `T`.

## Example: Using `Partial<T>`

```typescript
interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = {
    name: "Alice",
};

console.log(partialUser);  // { name: 'Alice' }
```


#### 4.2 `UtilityTypes/utilityTypesExample.ts`

```typescript
// Example 1: Using Partial<T>
interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = {
    name: "Alice",
};

console.log(partialUser);  // { name: 'Alice' }

// Example 2: Using Required<T>
interface Product {
    name: string;
    price?: number;
}

const fullProduct: Required<Product> = {
    name: "Laptop",
    price: 1000
};

console.log(fullProduct); // { name: 'Laptop', price: 1000 }
```