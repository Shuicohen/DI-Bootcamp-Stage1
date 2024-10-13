/** Exercise 1: */

type Person = {
  name: string;
  age: number;
};

type Address = {
    street: string;
    city: string;
  };
  
  type PersonWithAddress = Person & Address;
  
  const person1: PersonWithAddress = {
    name: "Marry",
    age: 31,
    street: "123 Main Street",
    city: "New York",
  };
  
  console.log(person1);
  
  
  /** Exercise 2: */
  
  function describeValue(value: string | number): string {
    if (typeof value === "string") {
      return "This is a number";
    } else if (typeof value === "number") {
      return "This is a string";
    }
    return "Unknown type";
  }
  
  console.log(describeValue("hello"));
  console.log(describeValue(42));
  
  
  /** Exercise 3: */
  
  let someValue: any = "Hello World!";
  let strValue: string = someValue as string;
  console.log(strValue);
  
  
  /** Exercise 4: */
  
  function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
  }
  
  console.log(getFirstElement(["a", "b", "c"]));
  console.log(getFirstElement(["hello", 42]));
  console.log(getFirstElement([100, "test"]));
  
  
  
  /** Exercise 5: */
  
  function logLength<T extends {length: number}>(input: T): void {
    console.log(input.length);
  }
  
  logLength([1, 2, 3, 4]);
  logLength("Hello world!");
  
  
  
  /** Exercise 6: */
  
  type Person1 = {
    name: string;
    age: number;
  };
  
  type Job = {
    position: string;
    department: string;
  }
  
  type Employee = Person1 & Job;
  
  function describeEmployee(employee: Employee): string {
    if(employee.position === "Manager") {
      return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
      return `${employee.name} is a Developer in the ${employee.department} department.`;
    }
  
    return `${employee.name} works in the ${employee.department} department.`;
  }
  
  const employee1: Employee = {
    name: "John",
    age: 30,
    position: "Developer",
    department: "IT",
  };
  
  const employee2: Employee = {
    name: "Jane",
    age: 25,
    position: "Manager",
    department: "Sales",
  };
  
  console.log(describeEmployee(employee1));
  console.log(describeEmployee(employee2));
  
  
  
  /** Exercise 7: */
  
  function formatInput<T extends { toString(): string }>(input: T): string {
    return (input as unknown as string);
  }
  
  console.log(formatInput(42));
  console.log(formatInput("Hello World!"));
  