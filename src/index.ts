console.log("Hello TypeScript");

// Lerning
let name: string = "Bhavin";
let experience: number = 10;
let isFlutterDeveloper: boolean = true;
console.log(name);
console.log(experience);
console.log(isFlutterDeveloper);

//Exercise
let company: string = 'Google';
let salary: number = 1000;
let isLearningBackend: boolean = true;
console.log(company);
console.log(salary);
console.log(isLearningBackend);

// Lerning Array
const skills: string[] = [
  "Flutter",
  "Android",
  "React Native",
];
console.log(skills);
console.log(skills[0]);
skills.push("TypeScript");
console.log('After Add new skill:', skills);

//Exercise Array
const newBackendSkills: string[] = [];
newBackendSkills.push("NodeJS");
newBackendSkills.push("ExpressJS");
newBackendSkills.push("MongoDB");
console.log(newBackendSkills);

// Lerning Objects
const employee = {
  id: 1,
  name: "Bhavin",
  experience: 10,
};
console.log(employee.name);
const employee2: { id: number; name: string; experience: number } = {
  id: 2,
  name: "John",
  experience: 5,
};
console.log(employee2.name);

// Exercise Objects
const companyDetails = {
    name: 'Google',
    location: 'USA',
    employees: 1000,
};
console.log(companyDetails.name);
console.log(companyDetails.location);
console.log(companyDetails.employees);

//Learning Functions
function greet(name: string): string {
  return `Hello ${name}`;
}
console.log(greet("Bhavin"));

//Exercise Functions
function calculateSalary(salary: number, bonus: number): number {
  return salary + bonus;
}
console.log(calculateSalary(1000, 200));

// Exercise Functions with Arrow Function
const multiply = (
  a: number,
  b: number,
): number => {
  return a * b;
};
console.log(multiply(5, 10));

//Final Exercise
const employeeData = {
  id: 1,
  name: "Bhavin",
  experience: 10,
  skills: [
    "Flutter",
    "Android",
  ],
};
printEmployee();
addSkill("TypeScript");
getTotalSkills();
printEmployee();
function printEmployee() {
    console.log(`ID: ${employeeData.id}`);
    console.log('After Add new skill:', skills);
    console.log(`Name: ${employeeData.name}`);
    console.log(`Experience: ${employeeData.experience}`);
    console.log(`Skills: ${employeeData.skills.join(", ")}`);
}

function addSkill(skill: string) {
    employeeData.skills.push(skill);
}

function getTotalSkills(): number {
    return employeeData.skills.length;
}