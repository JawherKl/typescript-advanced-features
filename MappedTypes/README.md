# Mapped Types in TypeScript

Mapped types allow you to transform existing types by applying operations to each property.

## Syntax

```typescript
{ [P in K]: T }
```


#### 6.2 `MappedTypes/mappedTypesExample.ts`

```typescript
// Example 1: Creating a Readonly Type
type ReadOnlyUser = {
    readonly name: string;
    readonly age: number;
};

const user: ReadOnlyUser = {
    name: "Alice",
    age: 30
};

console.log(user);

// Example 2: Making All Properties Optional
type PartialUser = {
    name?: string;
    age?: number;
};

const partialUser: PartialUser = {
    name: "Bob"
};

console.log(partialUser);
```