interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User; // "name" | "age"

const user2 = {
    name: "Alice",
    age: 25,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getProperty(user2, "name"));  // Alice
console.log(getProperty(user2, "age"));   // 25
