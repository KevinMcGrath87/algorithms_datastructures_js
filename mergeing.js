//need a function for mergin tow subarrays given indices to the left middle and right of the array

function merge(array, l, m , r){
    let size1 = m-l+1;
    let size2 = r-m;


//create arrays to collect the elements into
let left = new Array(size1);
let right = new Array(size2);


//make the subarrays
for(i = 0; i < size1; i++){
    left[i] = array[i + l];
}

//
for(j = 0; j< size2; j++){
    right[j]= array[m + j + 1]
}


//merge the arrays, need to index independently....

//variables....

let i = 0;
let j = 0;
//what the merged subarray index should be...
let k = l;
//assuming both arrays are sorted...check the initial element of both arrays. the smallest occupies the current index (k +.) or k incremented. whichever index...from the respective array was less is incremented and tested again until reaching an element of the right array that is smaller.

while(i < size1 && j < size2) {
    if(left[i]<= right[j]){
        array[k]=left[i];
        i++;
    }
    else{
        array[k]=right[j];
        j++
    }
    k++;
}


}

//how does this get implemented recursively in merge sort;
//l and r are the left and right endpoints of the subarray.

//feed the array to mergesort...mergesort calls itself on subarrays on the subarray.

//calling merge sort continuosly splits array in half. by determing a new m. after doing so it calls merge on the left m and r. when it hits the base case which is that the subarray contains 1 or less elements it should merge the arrays via merge. 
function mergeSort(array, l, r){
    if(r <= l){
        return;
    }

    //here though it should call merge on each determination of m...is that correct?
    let m = l +  Math.ceil((r-l)/2);
    mergeSort(array, l, m);
    mergeSort(array, m+1 , r);
    merge(array, l , m , r);
}


//pseudo kmergeSort

function k_mergeSort(array, l, r){
    if(r <= l){
        return array;
        //return array[l]?
    }
    let m = l +  Math.ceil((r-l)/2);
    k_mergeSort(array, l, m);
    k_mergeSort(array, m+1, r);
    merge(array, l, m , r);

}