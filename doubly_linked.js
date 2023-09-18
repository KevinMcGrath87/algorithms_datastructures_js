class DoublyLinkedList {
    constructor(head=null,tail = null,length = 0){    
    this.head = head;
    this.tail = tail;
    this.length = length;
    }
    prepend(val){
        let node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            this.length+=1;
            return node;
        }
        else{
            let temp = this.head;
            node.successor = temp;
            temp.predecessor = node;
            this.head = node;
            this.length += 1;
            return node;
        }
    }
    shift(){
        //remove head..
        if(this.head = null){
            return undefined;
        }
        else if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return undefined;
        }
        else {
            oldHead = this.head;
            this.head = oldHead.successor;
            oldHead.successor = null;
            this.head.predecessor = null;
            return(this.head)

        }
    }
    pop(){
        //pops and element off of the end of the list.?
        if(!this.head){
            return undefined;
        }
        if (this.length == 1){
            this.head = null;
            this.tail = null;
            this.length -= 1;
        }
        else{
            newTail = this.tail.predecessor;
            newTail.successor = null;
            this.tail.predecessor = null;
            this.tail = newTail;
            this.length -=1;
            return(this.tail)
        }
    }
    append(val){
        if(!this.head){
            this.prepend(val);
        }
        else{
            appendedNode = new Node(val);
            oldTail = this.tail;
            oldTail.successor = appendedNode;
            appendedNode.predecessor = oldTail;
            this.tail = appendedNode;
            this.length += 1;
        }
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.predecessor = null;
        this.successor = null;
    }
}


let doubleList = new DoublyLinkedList;
doubleList.prepend("1");
doubleList.prepend("2");
console.log(doubleList.head);
console.log(doubleList.head.successor);
console.log(doubleList.head.successor.predecessor);
