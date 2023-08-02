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
    console.log("true count", trueCount)
    let diff = array[trueCount-1]-pivot;
    array[trueCount-1]= array[trueCount-1]-diff;
    array[Math.floor(array.length/2)]= array[Math.floor(array.length/2)]+diff;
    console.log("array with pivot placed",array);

    for(let i = 0; i < trueCount; i++){
        console.log("pivot",pivot);
        if(array[i]>pivot){
            console.log("we found something smaller than pivot!")
            for(j = trueCount; j < array.length; j++){
            if (array[j]<=pivot){
                let difference = array[i]-array[j];
                array[i]=array[i]-difference;
                array[j]= array[j] + difference;
                console.log("swap time!");
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
console.log(quickSort([33,1,3,2,4,2]))