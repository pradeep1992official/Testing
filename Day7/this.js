class Person{
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Emplyee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }

    getID() {
        return this.id;
    }
}

let emp = new Emplyee("Pradeep","MCT787");

console.log("Employee Name : ", emp.getName());
console.log("Employee Id : ", emp.getID());