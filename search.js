function binarySearch(array, value){
    let leftPointer = 0;
    let rightPointer = array.length -1;
    while(leftPointer <= rightPointer){
        let midway = Math.ceil((leftPointer+rightPointer)/2)
        if(array[midway]==value){
            return midway;
        } 
        else if(value < array[midway]){
            rightPointer = midway-1;
        }
        else{
            leftPointer = midway+1;
        }
        
    }
    return -1;
}
