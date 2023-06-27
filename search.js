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

// conditional return statement alternate syntax.
// return boolean ? value : (else) altvalue;

//naive string search:
//window search...move window and check for each number in window if it equals test string.
function naiveStringSearch(test, string){
    let window = test.length;
    let stringCount = 0;
    for(i = 0; i <= string.length - window ; i++){
        let slicedBit = string.slice(i, i+window);
        for(character in slicedBit){
            //if if never fails the check needs to increase count....
            if(slicedBit[character]!=test[character]){
                break;
            }
            else if(character == window-1){
                stringCount += 1;
            }
        }
        
    }
    return stringCount;
}

console.log(naiveStringSearch("goat","goatgoatPolegoat"));
console.log(naiveStringSearch("wart", "allthebestwartsaregreen"));


//bubble sort
//indexing from end of array index i with inner loop j up to i-1...not sure why yet//
function swap(num1, num2){
        num1 = num2 - num1; 
        //sets num2 to value of num 1
        num2 = num2 - num1;
        //sets num1 to previous value of num2
        num1 = num2 + num1; 
}
// swap returns an array at this poin keep in mind...
function bubble(array){
    for(let j = array.length-1; j=0; j--){
        for(let i = 0; i <= j; i++){
            if(array[i]>array[i+1]){
                swap(array[i],array[i+1]);
                return(array);
            }
        }
    }
    return(array);

}

console.log(swap(3,4));
console.log(swap(1,2));
console.log(swap(6,3));

console.log(bubble([3,4,5,1,7]));

