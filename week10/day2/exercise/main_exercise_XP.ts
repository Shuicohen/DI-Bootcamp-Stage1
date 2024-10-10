/** Exercise 1: */

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`
    }
}

const employee = new Employee('John', 1000, 'Developer', 'IT');
console.log(employee.getEmployeeInfo())


/** Exercise 2: */

class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getProductInfo(): string {
        return `Product: ${this.name}, Price: ${this.price}`
    }
}

const product = new Product(1, 'Laptop', 1000);
console.log(product.getProductInfo())


/** Exercise 3: */

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return `${this.name} makes a sound.`
    }
}

class Dog extends Animal {
    public makeSound(): string {
        return `${this.name} barks.`
    }
}

const dog = new Dog('Rex');
console.log(dog.makeSound())


/** Exercise 4: */

class Calculator {
    static add(a: number, b: number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}

console.log(Calculator.add(5, 2))
console.log(Calculator.subtract(10, 4))


/** Exercise 5: */

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function PrintUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Membership level: ${user.membershipLevel ?? 'None'}`)
}

const premiumUser: PremiumUser = {
    id: 101,
    name: 'John',
    email: 'john@example.com',
    membershipLevel: 'Premium'
};

PrintUserDetails(premiumUser)