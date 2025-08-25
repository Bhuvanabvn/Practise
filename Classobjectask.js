class Students {
    constructor(name, section, marks) {
        this.name = name;
        this.section = section;
        this.marks = marks;
    }

    caluculation() {
        let total = this.marks.reduce(function(sum, mark) {
            return sum + mark;
        }, 0);
        let Percentage = (total/ (this.marks.length * 100)) * 100;
        return Percentage.toFixed(2) + "%";
    }

    Details() {
        console.log("Name: " + this.name);
        console.log("Section: " + this.section);
        console.log("Percentage: " + this.caluculation());
        console.log("---------------------");
    }
}

let stu1=new Students("bhuvana","A",[70,80,90,100,60])
stu1.Details()

let stu2= new Students("Dhinesh","B",[90,80,60,50,70])
stu2.Details()