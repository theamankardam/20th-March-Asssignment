class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary() {
        return `${this.salary}`
    }
}

let Employee1 = new Employee("Aman", "FrontEnd Developer", "80000");
console.log(Employee1.getSalary());