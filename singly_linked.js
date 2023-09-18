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
    prepend(val){
        //create a new head value (a Node) that which is the head is the next of this Node. 
        //That which has no "next" is the tail...
        //the length of the list is greater by 1 Node. 
        if(this.head == null){
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
    append(val){
        if(this.head  == null){
            this.tail = new Node(val);
            this.head = this.tail;
            this.length+=1;
        }
        else{
            let temp = this.tail;
            temp.next = new Node(val);
            this.tail = temp.next;
            this.length += 1;
        }
    }
    pop(){
        //consider edge cases....
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(currentNode.next == null){
                currentNode == null;
                this.length-=1;
                break;
            }
            else if(currentNode.next!=this.tail){
                currentNode = currentNode.next;
            }
            else {
                    currentNode.next = null;
                    this.tail = currentNode;
                    this.length -= 1;
            }
        }

    }
    shift() {
        //take current head and remove it...making the next element the head. 
        if(this.head == null || this.tail == null){
            return (undefined);
        }
        else{
            let temporary = this.head;
            this.head = this.head.next;
            this.length -= 1;
            if(this.length == 0){
                this.tail == null;
            }
            return(temporary.val)
        }
    }
    //write a get function that gets and element at a particular index in the list...
    get(position){
        let index = 0;
        if(position > this.length || position < 0){
            return undefined;
        }
        if(this.head == null){
            return undefined;
        }
        element = this.head;
        while(index < position){
            element = element.next; 
            index += 1;
        }
        return(element)

        }
    set(position, value){
        let currentnode = this.get(position);
        currentnode.val = value;
        return currentnode;
    }
    insert(position, value){
        if(position == 0||this.head == null){
            this.prepend(value);
        }
        else if(position >= this.length){
            this.append(value);
        }
        else{
            let current = new Node(value);
            let previous = this.get(position-1);
            console.log(previous)
            let next = this.get(position);
            previous.next = current;
            current.next = next;
            this.length+=1;
            return(current);
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

arrayOfThings = ["Kevin", 2, "the chicago beers", "allie reidy", 3.14159]
for(let i = 0; i < arrayOfThings.length; i++){
    list.append(arrayOfThings[i]);
}

let element = list.head;


while(element != null){
    element = element.next;
}


console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.set(4, "Kevin the Cooooool"))
console.log(list.insert(2,"this is at position 2 now"))
console.log(list.get(2).val);

for(let i = 0; i < list.length; i++){
    console.log(list.get(i).val);

}


