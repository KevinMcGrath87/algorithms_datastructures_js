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

function insertionSort(array){
    for (let i = 0; i < array.length; i++){
        let left = i;
        for(let j = i +1; j< array.length; j++){
            if(array[j]<array[left]){
                left -1;
            }
        }
        array

    }
    }
}