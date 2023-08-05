//quick sort algorithm.
//needs to place an item at some position i.e. sorted relative to the array. this is called the 'pivot'
// moves all numbers less than some number to the left of it. 

//save an array of indices satisfying the condition that element <= P. than swap for the position in the index array into the actual array. for whatever is currently there. 

//pointers...pointer (false Pointer) position at first x in Arr that is greater than Pivot. true pointer counts past false pointer until (True) then a we swap and count past the point that the false element is at now. 


function pivot(array){
    let pivot = array[Math.floor(array.length/2)];
    let trueCount = 0;
    //while loop runs until...count reaches the end of ...position pointer < array.length
    //a flag tells me whether I have hit a true statement since hitting  false.....
    //get a true count....
    //position pivot....
    //count for less than new position if hit a false count past pivot until true. and swap.
    //count past last index left of pivot.

    for(let i = 0; i <array.length; i++){
        if(array[i]<= pivot){
            trueCount += 1;
        }
    }
    let diff = array[trueCount-1]-pivot;
    array[trueCount-1]= array[trueCount-1]-diff;
    array[Math.floor(array.length/2)]= array[Math.floor(array.length/2)]+diff;
    console.log("array with pivot placed",array);

    for(let i = 0; i < trueCount; i++){
        if(array[i]>pivot){
            for(j = trueCount; j < array.length; j++){
            if (array[j]<=pivot){
                let difference = array[i]-array[j];
                array[i]=array[i]-difference;
                array[j]= array[j] + difference;
             }
        }
    }
    }
    console.log('pivoted array',array);
    //return the pivot index for slicing arrays...?
    return(trueCount-1);
}



function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    let center = pivot(array);
    let left = array.slice(0,center);
    let right = array.slice(center+1);
    return(quickSort(left).concat([array[center]]).concat(quickSort(right)));



    //what shoul pivot return.....

}
console.log(pivot([6,6]))
console.time("timer")
console.log(quickSort([33,1,3,2,4,2]))
console.timeEnd("timer")


function partition(array){
    let partitionIndex = 0;
    let pivot = array[Math.floor(array.length/2)]
    //while or for? need to count all elements less than or equal to pivot.incrementing pivot each time and swapping at the pivot.
    console.log("pivot",pivot);
    for(let i = 0; i < array.length; i++){
        if(array[i]<pivot){
            swap(array,partitionIndex,i);
            partitionIndex++;
        }
    }
    console.log("partition" ,array);
    return(partitionIndex);

}

function swap(array, first, second){
    difference = array[second]- array[first];
    array[second]= array[second]-difference;
    array[first]= array[second]+difference;
    return array;
}


function quickSortSwap(array){
    if(array.length <= 1){
        return array;
    }
    let pivot = partition(array);
    let left = array.slice(0,pivot);
    let right = array.slice(pivot+1);
    return(quickSortSwap(left).concat(array[pivot]).concat(quickSortSwap(right)));
}

console.log(swap([1,2,3],0,0))
console.log(partition([1,3,5,2,2]));

let testArray = [2,3,1,4,5,3,67,4,3,2,5,4,34,2];
console.log(quickSortSwap(testArray));

