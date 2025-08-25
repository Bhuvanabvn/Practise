class Info {
    constructor() {
        this.name = "bhuvana";
        this.age = 21;
        this.native = "chennai";
    }

    details() {
        console.log("name is", this.name, "age is", this.age, "native is", this.native);
    }
}

const print = new Info();   // create object properly

console.log(print.name);    // access property
print.details();            // call method
