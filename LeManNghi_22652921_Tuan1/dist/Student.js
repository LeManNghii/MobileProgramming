"use strict";
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
    display() {
        console.log("The name is: " + this.getName() +
            "\nThe age is: " + this.getAge() +
            "\nThe grade is: " + this.getGrade());
    }
}
const student = new Student("Nghi", 21, 8);
student.display();
