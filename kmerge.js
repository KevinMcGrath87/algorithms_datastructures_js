//my sort function. two arrays that are sorted are checked and merged together so as to be ordered.

//have to adjust the merge function. 

//rewrite merge. assuming both arrays are ordered. 
function merge(sub1, sub2){
    let i = 0;
    let j = 0;
    let k = 0;
    let size = sub1.length+sub2.length;
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

console.log(merge([100],[80]));


function mergeSort(array){
    //split into left and right arrays
    if(array.length <= 1){
        return(array);
    }
    console.log(array);
    let left = [];
    let right = [];
    let midpoint = 0;
    //even or odd?
    if(array.length%2 ==0){
        midpoint = (array.length/2);
    }
    else{
        midpoint = (array.length+1)/2;
    }
    for(i = 0; i < midpoint; i++){
        left[i]=array[i];
    }
    for(j = 0; j<array.length-midpoint; j++){
        right[j]=array[j+midpoint];
    }
    let merged = (merge(mergeSort(left),mergeSort(right)));
    return merged;
}

console.log(mergeSort([1,4,3,5,11,3,5,7,99,2]));

console.log(mergeSort([56,45,23,100,4,23,1]));
