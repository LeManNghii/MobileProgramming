class Person{
    private name: string;
    private age: number;

    constructor( name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age
    }
}

const person = new Person("Nghi", 21);
console.log('The name is: ' + person.getName());
console.log('The age is: ' + person.getAge());
