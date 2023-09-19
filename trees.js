//trees..
//trees branch.
//trees start somewhere. 

class Tree{
    constructor(){
        this.rootNode = null;
    }
    find(val){
        if(!this.rootNode){
            return(undefined);
        }
        else{
            let currentNode = this.rootNode;
            while(currentNode){
                if(currentNode.val == val){
                    return(currentNode);
                }
                else if(currentNode.val > val){
                    currentNode = currentNode.left;
                }
                else{
                    currentNode = currentNode.right;
                }
            }
            return('node with value not found');
        }
    }
    addNode(node){
        if(!this.rootNode){
            this.rootNode = node;
            return this.rootNode;
        }
        else{
            let val = node.val;
            let currentNode = this.rootNode;
            while(currentNode){
                if(val == currentNode.val){
                    return(currentNode.val)
                }
                else if(val > currentNode.val){
                    if(currentNode.right){
                        currentNode = currentNode.right;
                    }
                    else{
                        currentNode.right = node;
                        currentNode.right.parentNode = currentNode;
                        return currentNode.right;
                        
                    }
                }
                else{
                    if(currentNode.left){
                        currentNode = currentNode.left;
                    }
                    else{
                        currentNode.left = node;
                        currentNode.left.parentNode = currentNode;
                        return(currentNode.left);
                    }
                }
            }
        }
    }
    add(val){
        if(!this.rootNode){
            this.rootNode = new binaryNode(val)
            return this.rootNode;
        }
        else{
            let currentNode = this.rootNode;
            while(currentNode){
                if(val == currentNode.val){
                    return(currentNode.val)
                }
                else if(val > currentNode.val){
                    if(currentNode.right){
                        currentNode = currentNode.right;
                    }
                    else{
                        currentNode.right = new binaryNode(val);
                        currentNode.right.parentNode = currentNode;
                        return currentNode.right;
                        
                    }
                }
                else{
                    if(currentNode.left){
                        currentNode = currentNode.left;
                    }
                    else{
                        currentNode.left = new binaryNode(val);
                        currentNode.left.parentNode = currentNode;
                        return(currentNode.left);
                    }
                }
            }
        }
    }
    remove(val){
        if(!this.rootNode){
            return undefined;
        }
        else{
            let currentNode = this.rootNode;
            while(currentNode){
                if(currentNode.val == val){
                    if(currentNode == this.rootNode){
                        console.log("removing root node...")
                        if(currentNode.left && currentNode.right){
                            let subTree = currentNode.left;
                            this.rootNode = currentNode.right;
                            this.rootNode.parentNode = null;
                            this.addNode(subTree);
                            return(this.rootNode);
                        }
                        else if(currentNode.right){
                            this.rootNode = currentNode.right;
                            this.rootNode.parentNode = null;
                            return(this.rootNode);
                        }
                        else if(currentNode.left){
                            this.rootNode = currentNode.left;
                            this.rootNode.parentNode = null;
                            return(this.rootNode);
                        }
                        else{
                            this.rootNode = null;
                            return(null);
                        }
                      
                    }
                    else{
                            currentNode.parentNode.right = currentNode.right;
                            currentNode.parentNode.left = currentNode.left;
                            if(currentNode.right){
                            currentNode.right.parentNode = currentNode.parentNode;
                            }
                            if(currentNode.left){
                                currentNode.left.parentNode  = currentNode.parentNode;
                            }
                        }
                        return(currentNode);
                    }
                else if(val > currentNode.val){
                    console.log('moving right')
                    currentNode = currentNode.right;
                }
                else {
                    console.log('moving left')
                    currentNode = currentNode.left;
                }
                }
            }
        }
}

class binaryNode {
    constructor(val){
        this.parentNode = null;
        this.val = val
        this.left = null;
        this.right = null;
    }
}

let binTree = new Tree();

binTree.add(2);
binTree.add(3);
binTree.add(0);
binTree.add(1);
binTree.add(7);
binTree.remove(7);
console.log(binTree.rootNode)
binTree.remove(2)
console.log(binTree.rootNode)
binTree.add(2)
console.log(binTree.rootNode)
binTree.add(-1)
console.log(binTree.rootNode.left.right.right);
//recursive leftRightfunction. checks if it should go right or left. if so calls right or left on the left or right of it. 
console.log(binTree.rootNode)
console.log(binTree.find(3))
console.log(binTree.find(7))