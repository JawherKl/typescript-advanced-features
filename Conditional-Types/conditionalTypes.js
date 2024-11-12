function log(value) {
    if (typeof value === "string") {
        return "String: ".concat(value);
    }
    else {
        return value * 2;
    }
}
console.log(log("Hello")); // "String: Hello"
console.log(log(42)); // 84
