# Union and Intersection Types in TypeScript

## Union Types

A **Union Type** allows a variable to hold multiple types. You can declare a union type using the `|` operator. Union types are especially useful for values that may be of more than one type.

### Example of Union Types

```typescript
type StringOrNumber = string | number;

function display(value: StringOrNumber) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

display("Hello, world!"); // String value: Hello, world!
display(42);              // Number value: 42
# Union and Intersection Types in TypeScript

## Union Types

A **Union Type** allows a variable to hold multiple types. You can declare a union type using the `|` operator. Union types are especially useful for values that may be of more than one type.

### Example of Union Types

``` typescript
type StringOrNumber = string | number;

function display(value: StringOrNumber) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

display("Hello, world!"); // String value: Hello, world!
display(42);              // Number value: 42
```