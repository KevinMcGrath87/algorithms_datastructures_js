// lets make a function that counts using multiple pointers how many unique values or in an ordered list.


function unique_values(list){
    let count = 0;
    if (list.length == 0){
        return count;
    }
    else{
        count = 1;
        let pointer1 = 0;
        let pointer2 = list.length-1;   
    while (pointer1 < pointer2){
        if (list[pointer1] == list[pointer2]){
            return count;
        }
        else {
            count += 2
            for(let i = (pointer1)+1; i < pointer2; i++){
                if (list[i] != list[pointer1]){
                    pointer1 = i;
                    break;
                }
            }
            for(let i = pointer2-1; i >pointer1; i--){
                if (list[i]!=list[pointer2])
                pointer2 = i;
                break;
            }
        }

    }
    return count;
}
}
// should print 8.
console.log(unique_values([-1,-1,0,0,0,0,0,1,2,3,4,5,6,6,6]));

function countUnique(array){
    if(array.length == 0){
        return 0;
    }
    let count = 1;
    let pointer1 = 0;
    let pointer2= 0;
    for(let i = 0; i < array.length; i++){
        pointer2 = i;
        if(array[pointer1]==array[pointer2]){
            continue;
        }
        else{
            count +=1;
            pointer1 = pointer2;
        }
    }
    return count;
}
// console.log(countUnique([-1,-1,0,0,0,0,0,1,2,3,4,5,6,6,6,99]));


//window i.e. range
//"slide" i.e. n
//"list"

function maxSubArraySum(slide, array){
    let max = 0;
    let runningTotal = 0;
    if(array.length==0){
        return null;
    }
    for(let i = 0; i<slide; i++){
        max = max + array[i];
        console.log(max);
    }
    runningTotal= max;
    for(let i = slide; i < array.length; i++){
        runningTotal = runningTotal - array[i-slide]+array[i];
        max = Math.max(runningTotal, max);
        console.log(i, "index");
    }
    return max;
}




console.log(maxSubArraySum(3, [56,1,2,3,4,5,6,7,8,9]));

//base case is current level = 0? 
// on an array such as [[[[[]]]], [[],[]]]
function findDeepestSpace(array){
let max = 0;//this variable is to keep track of deepest space in subarray.
    //deepest space in array is 1 + deepest element in it.
if(array.length){
    //if the array has an element then run deepest on it.
    //base case is 0 elements inside array.
    //when you reach the base case...the function results in a 1.
    //at base case currentDepth += 1;
    array.forEach(element => {
        let deepest = findDeepestSpace(element)+ 1;

        //max is cached/saved at the level of the function call... so it wont update unless the element being iterated on has a deeper depth.
        //dont really understand how this works yet..relies on funciton returning max on true condition.
        if(deepest > max){
            max = deepest;
        }
    });
}
else{
    return 0;
}

//find deepest returns max when condition of having an element returns true. 
return max;
}

console.log("deepest space is:",findDeepestSpace([[],[[[[],[[[[],[[]]]]]],[]]],[[[],[[[]]]]]]));

//factorial of n

//factorial of n is = n*factorial of n-1....
//call stack... functions wait for other functions or pop when finished. 
//factorial of 1 is 1;
function factorial(integer){
    let value = null;
    if(integer > 1){
    value = integer * factorial(integer-1);
    //factorial trails off and eventually evaluates the value of value....
    }
    else if (integer < 0){
        return null;
    }
    else {
        return 1;
    }

    return value;
}
number = 7;
console.log("factorial of " + number + " is",factorial(number))


function fibonacci(num){
    if(num ===1){
        return 1;
    }
    else if (num === 2){
        return 1;
    }
    return (fibonacci(num-1)+fibonacci(num-2))
}

let fibNum = 9;
console.log(`the ${fibNum}th digit of the fibonacci series is ${fibonacci(fibNum)}`)

function biggestNumber(array){
    let currentLargest = 0;
    array.forEach(element => {
            if (currentLargest < element) {
                currentLargest = element;
            }
            else if(element.length){
                if (currentLargest < biggestNumber(element)){
                    currentLargest = biggestNumber(element);
                }
            }
        })
        return currentLargest;
}

function reverse(string){
    if(string.length <= 1){
        return string;
    }
    else{
        string = reverse(string.slice(1)).concat(string[0]);
    }
    return string;
}

let stringToReverse = "horatio";
console.log(`the reverse of ${stringToReverse} is ${reverse(stringToReverse)}`)
function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    else if (exponent === 1){
        return base;
    }
    else {
        base = base*(power(base, exponent-1));
    }
    return base;
}
// maybe I should make a logic application... check if something is a valid formula etc. 

myNestedNumArray = [1,2,[1,2,120000000,4,[30,10,200000000000]]]

console.log(`the biggest number is ${biggestNumber(myNestedNumArray)}`)
let base = 3;
let exponent = 6;
console.log(`${base} to the ${exponent} is: ${power(base,exponent)}`)

//is palindrome.

function isPalindrome(string){
    if(string.length <= 1){
        return true;
    }
    else if (string[0]===string[string.length-1] && isPalindrome(string.slice(1,string.length-1))){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome("peeleepspeeleep"));


//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(array, callback){
    if(array.length===0){
        return false;
    }
    else if (callback(array[0])){
        return true;
    }
    else{
        return someRecursive(array.slice(1), callback);
    }
}

function flatten(array){
    let flattenedArray = [];
    for(each in array){
        if(Array.isArray(array[each])){
            for(element in flatten(array[each])){
                flattenedArray.push(array[each][element]);
            };
        }
        else {flattenedArray.push(array[each])};
}
return flattenedArray;
}



    console.log(flatten([1,2,3[4,5,6[7,8]]]));