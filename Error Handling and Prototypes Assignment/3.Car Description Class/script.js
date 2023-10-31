class Car {
    constructor(year, company, model) {
        this.year = year;
        this.company = company;
        this.model = model;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

let myCar = new Car("2022", "Skoda", "Rapid");
console.log(myCar.getDescription());