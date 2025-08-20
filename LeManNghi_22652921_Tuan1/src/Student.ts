class Student extends Person{
    private grade:number;

    constructor(name:string, age:number, grade:number){
        super(name,age);
        this.grade = grade;
    }

    getGrade(){
        return this.grade;
    }

    display(): void{
        console.log("The name is: " + this.getName() +
                "\nThe age is: " + this.getAge() +
                "\nThe grade is: " + this.getGrade());
    }
}

const student = new Student("Nghi", 21, 8);
student.display();