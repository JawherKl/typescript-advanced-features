type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"

function log<T>(value: any): T extends string ? string : number {
    if (typeof value === "string") {
        return `String: ${value}` as any;
    } else {
        return value * 2 as any;
    }
}

console.log(log("Hello")); // "String: Hello"
console.log(log(42));      // 84