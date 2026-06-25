// Leanring Interface
interface EmployeeData {
  id: number;
  name: string;
  experience: number;
}

const employeeData: EmployeeData = {
  id: 1,
  name: "Bhavin",
  experience: 10,
};

console.log(`ID: ${employeeData.id}`);

// Exercise Interface
interface Department {
  id: number;
  name: string;
}

const department: Department = {
  id: 1,
  name: "Mobile Development",
};

// Optional Properties
interface Employee {
  id: number;
  name: string;
  phoneNumber?: string;
}

//Type Aliases
type EmployeeStatus =
  | "Active"
  | "Inactive";

let status: EmployeeStatus = "Active";

type UserRole =
  | "Admin"
  | "Manager"
  | "Employee";  

let role:UserRole = "Admin"  

console.log("role----",role);

interface EmployeeInfo {
  readonly id: number;
  name: string;
  phoneNumber?: string;
}


interface EmployeeInfo {
  readonly id: number;
  name: string;
  phoneNumber?: string;
}

class Employee
  implements EmployeeInfo {
  constructor(
    public id: number,
    public name: string,
    public phoneNumber?: string,
    public status: EmployeeStatus = "Active",
  ) {}

  printInfo() {
    console.log(
      `${this.name} - ${this.status}`,
    );
  }
}

const employee1 = new Employee(
  1,
  "Bhavin",
);

const employee2 = new Employee(
  2,
  "John",
  "9999999999",
  "Inactive",
);

employee1.printInfo();
employee2.printInfo();


