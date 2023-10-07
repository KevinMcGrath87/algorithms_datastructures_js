class Tree{
    constructor(){
        this.root = null;
    }
    addNode(val){
        if(!this.root){
            this.root = new Node(val);
        }
        else
        //traversal function...
    }
    traverseALL(node=this.root,val){
        // if(!node){
        //     return(false);
        // }
        // if(node.val == val){
        //     return(true);
        // }
        // if(node.children == [] && node.val != val){
        //     return(false);
        // }
        // else{
        //     node.children.forEach(child => {
        //         traverseALL(child,val);
        //     });
        // }
    }

}

class Node{
    constructor(val){
        this.parent = null;
        this.val = val;
        this.children = [];
    }
}

let tree = new Tree();

//depth traversal function..
//recursive.
//we start at a node...the root. the function chooses a path depending on what is available, must remove possible paths as it goes. i.e. check all paths below this node......
//recursive base case no nodes below this node and val not found then return to parent node. 
//checking paths means to take in the number of paths possible... and eliminate one at a time...
//maybe it takes a node as argument....if all the nodes below it have beeen checked...go to parent node... if no parent node popOut.

