# Understanding `typeof` in TypeScript

In TypeScript, `typeof` is a type operator that allows you to get the type of a variable or expression. It is used in two main contexts:

1. **Getting the type of a variable or value**.
2. **Creating a type from the structure of an existing variable**.

## Using `typeof` to Infer Types

You can use `typeof` to infer the type of a variable, which is especially helpful when you want to reuse a type based on an existing value.

### Example: Inferring Types

```typescript
const user = {
    name: "Alice",
    age: 30
};

type UserType = typeof user;

const newUser: UserType = {
    name: "Bob",
    age: 25
};

console.log(newUser);
```