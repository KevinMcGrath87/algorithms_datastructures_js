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




