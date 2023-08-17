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


//singly linked lists store data...any kind... ordered... no indices.
//think peano arithmetic axioms.


class SingleList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        //create a new head value (a Node) that which is the head is the next of this Node. 
        //That which has no "next" is the tail...
        //the length of the list is greater by 1 Node. 
        if(this.head == null && this.tail == null){
            this.head = new Node(val);
            this.tail = this.head;
            this.length += 1;
        }
        else{
            let temp = this.head;
            this.head = new Node(val);
            this.head.next = temp;
            this.length+=1;
        }
    }
}

class Node {
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

let first = new Node("1");
first.next= new Node("2");
first.next.next = new Node("3");

console.log(first.next.next.val);

let list = new SingleList;

list.push("1");
console.log(list.head.val);
console.log(list.tail.val);
console.log(list.length);

list.push("2");
console.log(list.head.val);
console.log(list.tail.val);
console.log(list.head.next.val);
console.log(list.length);