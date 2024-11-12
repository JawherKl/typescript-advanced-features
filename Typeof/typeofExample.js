function printLength(value) {
    if (typeof value === "string") {
        console.log("String length: ".concat(value.length));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
printLength("Hello, world!"); // String length: 13
printLength(42); // Number value: 42
