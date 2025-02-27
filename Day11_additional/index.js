//getter and setter

class Teacher { //class definition
    constructor(name) {     //constructor definition
        this.fName = name;
    }

    get peru() {
        return this.fName;
    }

    set peru(newfName) {
        this.fName = newfName;
    }
}

let madam = new Teacher("Mahalakshmi");
console.log(madam.peru);

madam.peru = "Mahalakshmi Srinivasan";
console.log(madam.peru);

