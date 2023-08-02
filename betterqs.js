function collect(array,partitionIndex){

    //define p index in quicksort?
    for(let index = 0; index < array.length; index++){
        if(index == partitionIndex){
            continue;
        }
        else if(index < partitionIndex && array[index]>=array[partitionIndex]){
            let difference = array[index]-array[partitionIndex];
            array[index] = array[index] - difference;
            array[partitionIndex]= array[partitionIndex]+difference;
            partitionIndex = index;
            index = 0;

        }
        else if (index > partitionIndex && array[index]<array[partitionIndex]){
            let difference = array[partitionIndex]-array[index];
            array[index] = array[index] + difference;
            array[partitionIndex]= array[partitionIndex]-difference;
            partitionIndex = index;
            index = 0;
        }
    }
    return [array,partitionIndex];
    //return pindex?
}



//different form of collect. find first FALSE; save index continue to first TRUE swap with first FALSE increment count (increment first FALSE) continue to first next true. 
function collectLeft(array, partitionIndex = 0){
    let trueCount = 0;
    let lastFalse = 0;
    for(x = 1; x < array.length; x++){
        if(array[x]<array[partitionIndex]){
            let difference = array[x]-array[lastFalse];
            array[lastFalse]= array[lastFalse]+difference;
            array[x] = array[x]-difference;
            //put false before all the trues
            //put true after the other trues where the current false is and pl
            lastFalse+=1;c
            trueCount+=1;
        }
    }
    let difference = array[partitionIndex]-array[trueCount];
    array[trueCount]= difference+array[trueCount];
    array[partitionIndex] = array[partitionIndex]-difference;
    return array;
}

let testerArray = [9,9,9,5,67,1,3,415,15,0,5,2,8,2,-1];
console.log("collectLeft", collectLeft(testerArray));
console.log(collect(testerArray));

//collect moves all lesser elements to the left of the partition.must use collect recursivelhy on partitions in paritions
function quickSort(array){
    if(array.length <=1){
        return array;
    }
    console.log(array);
    let partitionIndex = Math.floor(array.length/2);
    let arrayCouple = collect(array,partitionIndex);
    let lesser = [];
    let greater = [];
    let partitionElement = arrayCouple[0][arrayCouple[1]];
    for(let x = 0; x < arrayCouple[1]; x++){
        lesser.push(arrayCouple[0][x]);
    }
    for(let x = arrayCouple[1]+1; x < arrayCouple[0].length; x++){
        greater.push(arrayCouple[0][x]);
    }
    return(quickSort(lesser).concat(partitionElement).concat(quickSort(greater)))


}

console.log(quickSort(testerArray));
