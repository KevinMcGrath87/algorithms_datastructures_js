function merge(array, l , m , r) {

    //m approximates middle
    let size1 = m - l + 1;
    let size2 = r -m;

    //temporary arrays

    let left = new Array(size1);
    let right = new Array(size2);

    for (let i = 0; i < size1; i++){
        left[i]= arr[l+1];
    }
    for ( let j = 0; j < size2; j++){
        right[j]= array[m + 1 + j];
    }
    //merging back into array?
    //to eliminate empy indices?

    let i = 0;

    let j = 0;

    let k = l;

    while(i < size1 && j < size2){
        if (left[i] <= right[j]){
            array[k] = left[i];
        }
        else {
            array[k] = right[j];
            j++;
        }
        k++;
    }
}

function mergeSort(array, l, r){
//takes a left and right index of the subarray to sort. 
if (l >= r){
    return;
}
let m = l + Math.floor((r-l)/2);
mergeSort(array,l,m);
mergeSort(array, m+1, r);
merge(array, l, m ,r);
}


//call stack:
//calls merge sort which if not base case calls merge sort...until base case and returns??returns and should then call merge sort on the right side of array.. other subarray.....until base case, then calls merge. on 

function k_mergeSort()