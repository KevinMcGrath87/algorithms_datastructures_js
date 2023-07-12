function selectionSort(array) {
    let swapPoint = 0;
    if(array.length%2 === 0){
        halfwayPoint = array.length/2
    }
    else {
        halfwayPoint = (array.length-1)/2;
    }
    for(let i = 0; i < halfwayPoint; i++){
        let minimum = array[i];
        for(let j = i; j < array.length; j++){
            if (array[j]<minimum){
                minimum = array[j];
                swapPoint = j;
                console.log(`minimum is now ${minimum}`);
            } 
        }
        array[swapPoint]=array[i];
        array[i]= minimum;
        console.log(array);
    }
    return array;
}

console.log(selectionSort([6,5,4,3,2,1]));

//should sort:
//1,5,4,3,2,6
//1,2,4,3,5,6
//1,2,3,4,5,6

console.log(selectionSort([7,6,5,4,3,2,1]));
console.log(selectionSort([2,3,1,7,8,9,10]));
//insertion sort;
//must build sorted portion to the left of the array and index within that the new element.
//define function of check for less at index...


function insertAt(array, index, element){
    let leftOfArray = array.slice(0,index);
    let rightOfArray = array.slice(-(array.length - (index)));
    leftOfArray.push(element);
    let returnArray = leftOfArray.concat(rightOfArray);
    return returnArray;
}

function removeFrom(array, index){
    let leftOfArray = array.slice(0,index+1);
    let rightOfArray = array.slice(-(array.length - (index+1)));
    leftOfArray.pop();
    let returnArray = [];
    if (rightOfArray.length && leftOfArray.length) {
        returnArray = leftOfArray.concat(rightOfArray);
    }
    else if (rightOfArray.length) {
        returnArray = rightOfArray;
    }
    return returnArray;
}




function insertionSort(array){
    console.log(array);
    for(let idx = 0; idx < array.length-1; idx++){
        console.log(array[idx], array[idx +1]);
        //check against next element after left partition i.e. idx
        if(array[idx]>array[idx + 1]){
            console.log("TRUE");
            for(let left = idx; left >= 0; left--){
                console.log(array[left], array[idx + 1])
                if(left == 0){
                    console.log("HIT ZERO");
                    array = insertAt(array, 0, array[idx+1]);
                    console.log(array);
                    array = removeFrom(array, idx+2);
                    console.log(array);
                    break;
                }
                else if(array[left] <= array[idx + 1]){
                    array = insertAt(array, left + 1, array[idx +1]);
                    array = removeFrom(array,idx + 2 );
                    break;
                }
                }
            }
        }
        return array;
    }



console.log("this is what came out of insertion sort " + insertionSort([2,1]));