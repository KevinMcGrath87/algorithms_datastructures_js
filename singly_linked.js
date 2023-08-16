//data structures are sets with structure i.e. "relations".

//es2015 syntax.. class keywords..

//object v.s. prototype based inheritance. look up wiki.

class Student {
    constructor(firstName, lastName){
        //this is like a variable that refers to the specific instance of the class instantiated. 
        this.firstName = firstName;
        this.lastName = lastName;
    }
    kill(name){
        this.firstName = name;
    }
}


let coolStudent = new Student("kevin", "mcgrath");

console.log(coolStudent.kill("George"), coolStudent.firstName);