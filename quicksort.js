//placement function or just one algorithm?

//takes an array and splits it into 2 arrays... those elements that are smaller than or equal to the "pivot" and those that are greater than the pivot.
function merge(sub1, sub2){
    let i = 0;
    let j = 0;
    let k = 0;
    let size = sub1.length+sub2.length;
    console.log(sub1,sub2);
    let mergedArray = new Array(size);
    while(k<size){
        //see if sub1[i]<sub2[j]
        if(sub1[i]<=sub2[j]||sub2[j]===undefined){
            mergedArray[k] = sub1[i];
            i++;
        }
        else if(sub2[j]!==undefined){
            mergedArray[k]=sub2[j];
            j++;
        }
        k++;
    }
    return mergedArray;
}

//function that slices out a value from the array at a certain index and returns an array that includes the array element collected into an array and the merged arraay.
function sliceAndMerge(array,pivot){
    //where pivot is the index of the pivot.
    let beginning = array.slice(0,pivot);
    let end = array.slice(pivot+1);
    let pivotArray= [];
    pivotArray.push(array[pivot]);
    let returnArray = beginning.concat(end);
    return([returnArray, pivotArray]);

}
console.log(sliceAndMerge([1,2,3,4,5],2));
function quickSort(array){
    if(array.length<=1){
        return array;
    }
    let less = [];
    let greater = [];
    let pivot = Math.floor(array.length/2);
    let sliced = sliceAndMerge(array, pivot)[0];
    let pivotArray = sliceAndMerge(array,pivot)[1];
    console.log("sliced and pivot array",sliced,pivotArray);
    //seperate the array into 2 based on the pivot value and determine the proper position for the pivot value. Place the pivot value back into the sorted array(it'll be the largest value of the lesser array) and merge the two arrays
    for(let i = 0;i <sliced.length; i++){
        if(sliced[i]<=pivotArray[0]){
            less.push(sliced[i]);
        }
        else{
            greater.push(sliced[i]);
        }
    }
    console.log("less",less,"greater", greater);
    return(merge(quickSort(less).concat(pivotArray),quickSort(greater)));





}

console.log(quickSort([11,1]));