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


function getDigit(number, index){
    //taking ten to the power of the index 
    //divide the abs of the number by 10 to the index power. this places the index digit in the 1's column.
    //take the floor to remove the digits that are now negative mulitples of 10;
    //take the modulus of 10 of the number since every power larger than 0 of 10 is a multiple of ten the remainder is just the digit in the 1's column which is the indexed digit we care about.
    //returns 0 if the digit is 0 and 0 if the index is too great. 
    number = Math.abs(number);
    number = Math.floor(number/(Math.pow(10,index)));
    number = number % 10;
    return number;
}

function digitCount(number){
    number = Math.abs(number);
    number = Math.log10(number);
    number = Math.floor(number);
    return number+1;
}


let testNumber = -230;
let index = 3;
console.log(`digitcount of ${testNumber}`,digitCount(testNumber));
console.log(`getdigit at ${index}`, getDigit(testNumber, index));
function radixal(array){
    let buckets = [[],[],[],[],[],[],[],[],[],[]]
    //using logs count max number of digits in the numbers of the array.

    let iterations = 0;
    array.forEach(element =>{
        let check = digitCount(element);
        if (check > iterations){
            iterations = check;
        }
    });
    for(let i = 0; i<iterations; i++){
        array.forEach(element=>{
            let bucketPosition = getDigit(element, i);
            console.log("bucket position", bucketPosition);
            console.log(buckets[bucketPosition]);
            buckets[bucketPosition].push(element)
            //fills  buckets on that iteration.
        });
        //dump the buckets back into the array.
        let position = 0;
        for(let i = 0; i< buckets.length; i++){
            for(j = 0; j< buckets[i].length; j++){
                array[position] = buckets[i][j];
                position += 1;
            }
            buckets[i]=[];
        }
    }
    return(array);

}
console.log("radixal", radixal(testArray));