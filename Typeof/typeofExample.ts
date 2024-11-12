
function printLength(value: string | number) {
    if (typeof value === "string") {
        console.log(`String length: ${value.length}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

printLength("Hello, world!"); // String length: 13
printLength(42);               // Number value: 42
