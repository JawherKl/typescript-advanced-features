type ReadOnlyUser = {
    readonly name: string;
    readonly age: number;
};

const user: ReadOnlyUser = {
    name: "Alice",
    age: 30
};

//user.name = "Bob";  // Error: cannot reassign a readonly property
