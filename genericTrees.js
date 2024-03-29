
// A generic tree is a connected and directed graph under the ancestor/parent/child/descendent relation.
//If the tree is not the empty tree then there exists a node (alpha) that has no ancestors and for any other node (x) (alpha is an ancestor of x)
//x node is the parent of another node z iff it is an ancestor of that node and for any y if y is ancestor of z the node in question x is equal to y or y is an ancestory of x
//that is to say there is no inbetween ancestor of x and z called y.
//child is the converse relation of parent. 
//child, ancestor, parent are antireflexive.
// if x is the parent of y and z is the parent of y then x = z (parents are unique, children are not)
//the ancestor relation is antireflexive, transitive, antisymmetric.
//the power relation of parent is ancestor

//FINDNODE CheckChildren
//we will do this as a breadth first search using a recursive function.
//the function will take a val and will start at the first node. 
//base case is that the node has no children. we check the val and if it doesnt equal it we check the next child.
//if node val(x) != val check all children of x. i.e. for each child in children of x call checkChildren. 

class Tree {
    constructor(){
        this.rootNode = null;
    }
    addNode(val,rank,currentNode = this.rootNode){
        if(!currentNode){
            let root = new Node(val);
            this.rootNode = root;
        }
        else if((rank == (currentNode.rank+1) && currentNode == this.rootNode)||(rank == currentNode.rank)||rank == 0){
            let child = new Node(val=val, rank=rank);
            child.parent = currentNode;
            currentNode.children.push(child);
            return(child);
        }
        //if the rank is the same as the rank of the children of the currentnode add to a node at that rank with least children;
        else if (rank == currentNode.rank+1 && currentNode.parent != null){
            //find in current rank least amount of children and return.
            let setToCheck = currentNode.parent.children;
            let nodeToAddTo = setToCheck[0];
            let leastChildrenSoFar = setToCheck[0].children.length;
            for(let i = 0; i < setToCheck.length; i++){
                if(setToCheck[i].children.length <= leastChildrenSoFar){
                    nodeToAddTo = setToCheck[i];
                    leastChildrenSoFar = nodeToAddTo.children.length;
                }
            }
            let child = new Node(val, rank);
            nodeToAddTo.children.push(child);
            child.parent = nodeToAddTo;
            return(child)
        }
        else{
            console.log(currentNode.rank);
            this.addNode(val=val,rank=rank,currentNode = currentNode.children[0]);
        }


        //otherwise find the node with the least amount of children and see if it satisfies the condition.     
    }

    //a toggle gets switch if at any level the value is found. a true value for the toggle causes a return at each level
    //if a node has no children and it's value is not the match we either continue to the next one or pop up a level.
    //checkSubTrees.
    checkSubtrees(val,root=this.rootNode){
        //a node x is in the tree S iff x is in a subtree of S
        //a subtree S' of S is either S itself, or for any node y in S, S' is y and all of its descendants  
        if(root.val == val){
            return true;
        }
        for(let i = 0; i< root.children.length; i++){
           if (this.checkSubtrees(val, root=root.children[i])){
            return true;
           }
        }
        return false;
    }
    checkLevels(val,nodeArray = [this.rootNode]){
        //if any node x in the array is the node return true; else if a node x in any subsequent level of T is the node return true.
        if(nodeArray.length == 0){
            return false;
        }
        for(let i = 0; i< nodeArray.length; i++){
            if(nodeArray[i].val == val){
                return true;
            }
        }
        let nextLevel = [];
        for(let i = 0; i < nodeArray.length; i++){
            nextLevel = nextLevel.concat(nodeArray[i].children);
        }
        return(this.checkLevels(val, nextLevel))
    }
    displayTree(arrayOfNodeArrays = [[this.rootNode]]){
        if(arrayOfNodeArrays.length==0){
            return("end")
        }
        //    function leavesOfNode(node){
        //         let leaves = 0;
        //         if(node.children.length == 0){
        //             return(1);
        //         }
        //         for(let i = 0;i < node.children.length;i++){
        //             leaves = leaves + leavesOfNode(node.children[i])
        //         }
        //         return leaves
        //    }

        //comes into display as [[node,node,node],]
           function printLevel(arrayOfNodeArrays){
                let string = '';
                for(let i = 0; i < arrayOfNodeArrays.length;i++){
                    let nodeArray = arrayOfNodeArrays[i];
                    let childNodes = '';
                    for(let j = 0; j < nodeArray.length; j++){
                        childNodes = childNodes + nodeArray[j].val +',';
                    }
                    string = string + "[" + childNodes + "]"
                }
                console.log(string);
           }
           printLevel(arrayOfNodeArrays);
           let nextLevel = [];
           for(let i = 0; i < arrayOfNodeArrays.length; i++){
            let nodeArray = arrayOfNodeArrays[i];
            for(let j = 0; j< nodeArray.length; j++){
                if(nodeArray[j].children.length != 0){
                    nextLevel.push(nodeArray[j].children);
                }
            }
            }
            nextLevel = nextLevel.reverse();
            // console.log("next level",nextLevel)
            this.displayTree(arrayOfNodeArrays = nextLevel);


        //displays the ranks of the tree line by line.
        //spaces levels according to how many descendents(left right etc) 

    }

}



class Node {
    constructor(val,rank=0){
        this.parent = null;
        this.children = [];
        this.val = val;
        this.rank = rank;
    }
}



genTree = new Tree();
genTree.addNode(0);
console.log(genTree.rootNode.val)
genTree.addNode(1, rank = 1);
genTree.addNode(2, rank = 1);
genTree.addNode(val = 8, rank = 1);
genTree.addNode(3, rank = 2);
genTree.addNode(4,rank = 2);
genTree.addNode(11, rank = 2);
genTree.addNode(10, rank = 2);
genTree.addNode(5, rank = 3);
genTree.addNode(9, rank = 3);
genTree.addNode(13,rank = 3);
genTree.addNode(6,rank=4);
console.log(genTree.addNode(7,rank = 4));
genTree.addNode(val=12, rank =4)
console.log(genTree.displayTree());


// genTree.addNode("Just another node");
// genTree.addNode(val = "newestNode",rank = 1);
// genTree.addNode(val ="node below newestNode",rank = 2);
