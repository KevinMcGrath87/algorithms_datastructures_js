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
