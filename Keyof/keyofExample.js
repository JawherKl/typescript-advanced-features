var user2 = {
    name: "Alice",
    age: 25,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(user2, "name")); // Alice
console.log(getProperty(user2, "age")); // 25
