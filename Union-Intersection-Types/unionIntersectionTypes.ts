type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    position: string;
};

type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
    name: "Alice",
    age: 30,
    employeeId: 1234,
    position: "Developer"
};

console.log(employee);
