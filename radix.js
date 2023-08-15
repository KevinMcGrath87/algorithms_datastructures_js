//radix sort.
//continuosly rearrange numbers in base ten from largest to smallest by their least significant to mose significant digit. 
//convert to and from strings in order to look at subsequent digits.

//find out how many iterations of the sort need to be done by finding the maximum number of digits for a number in the set. 
//for the max number of digits, first sort elements in budgets according the the value of the digit.
// then extract the numbers into the array in order of how they are sorted by digits. For each bucket in buckets for each element in the bucket push it into the array.  
// if a number runs out of digits sort it into the array.
// else keep doing this until you reach the maximum number of digits to compare. 
let testArray = [1,233,23,14,5,233,2467,69];
function radixSort(arrayOfNums){
    //start over.
    let iterCount = 0;
    let buckets = [[],[],[],[],[],[],[],[],[],[]];
    arrayOfNums.forEach(element => {
        let stringNum = element.toString();
        for(let i = 1; i<= stringNum.length; i++ ){

            if(i>iterCount){
                iterCount = i;
            }
        }
        });
    for(let i = 1; i < iterCount;i++){
        arrayOfNums.forEach(element=>{
            console.log("element length",element.toString().length);
            if(element.toString()[(element.toString().length)-i]==undefined){
                buckets[0].push(element)
            }
            else {
                buckets[Number(element.toString()[element.toString().length-i])].push(element)
            }

            //fill array in order of elements in the buckets. 
            
            console.log("arrayofNums", arrayOfNums)
        });
        let position = 0;
        for(let i = 0; i < buckets.length; i++){
            for(let j = 0; j<buckets[i].length;j++){
                arrayOfNums[position]=buckets[i][j];
                position++;
            }
            buckets[i]=[];
        }
    }
}
    

    



radixSort(testArray);



function deleteElement(array,position){
    let arrayLeft = [];
    let arrayRight = [];
    for(let i = 0; i<position; i++){
        arrayLeft.push(array[i]);
    }
    for(let i = position+1; i < array.length; i++){
        arrayRight.push(array[i]);
    }
    let returnArray = arrayLeft.concat(arrayRight);
    return(returnArray);
}

console.log(deleteElement(testArray, 0))