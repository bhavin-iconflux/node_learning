// Access Modifiers
// class Employee {
//   public name: string;
//   private salary: number;

//   constructor(
//     name: string,
//     salary: number,
//   ) {
//     this.name = name;
//     this.salary = salary;
//   }

//   showSalary() {
//     console.log("Salary:", this.salary);
//   }
// }
// const employee = new Employee(
//   "Bhavin",
//   50000,
// );
// console.log(employee.name);
// employee.showSalary();


// Async/Await & Promise
async function getUser(): Promise<string> {
  return "Bhavin";
}
async function testAsync() {
  const user = await getUser();
  console.log("User:", user);
}
testAsync();

// Generics
function identity<T>(
  value: T,
): T {
  return value;
}
console.log(
  identity("Flutter"),
);
console.log(
  
  identity(10),
);


// Enums
enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}
const role = UserRole.ADMIN;
console.log("Role:", role);

// Destructuring
const user = {
  name: "Bhavin",
  email: "bhavin@test.com",
};
const { name, email } = user;
console.log(user.name);
console.log(email);

// Spread Operator
const skills = [
  "Flutter",
  "Android",
];
const newSkills = [
  ...skills,
  "NodeJS",
];
console.log(newSkills);


// Object Spread
const profile = {
  name: "Bhavin",
  experience: 10,
};
const updatedProfile = {
  ...profile,
  experience: 11,
};
console.log(updatedProfile);

// Null / Undefined Handling
let phone: string | undefined;

console.log(
  phone ?? "Not Available",
);

// Error Handling
function divide(
  a: number,
  b: number,
): number {
  if (b === 0) {
    throw new Error(
      "Cannot divide by zero",
    );
  }

  return a / b;
}

try {
  console.log(
    divide(10, 0),
  );
} catch (error) {
  console.log(
    "Error caught:",
    error,
  );
}

// Final Practical
enum EmployeeStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface Employee {
  id: number;
  name: string;
  status: EmployeeStatus;
}

class EmployeeService {
  private employees: Employee[] = [];

  async addEmployee(
    employee: Employee,
  ): Promise<void> {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}

async function main() {
  const service =
    new EmployeeService();

  await service.addEmployee({
    id: 1,
    name: "Bhavin",
    status:
      EmployeeStatus.ACTIVE,
  });

  const employees =
    service.getEmployees();

  console.log(employees);
}

main();