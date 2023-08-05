//made a binary conversion algorithm.

function binaryConvert(number){
    expArray = [];
    while(number != 0){
        let exponent = Math.floor(Math.log2(number));
        console.log("exponent",exponent);
        expArray.push(exponent);
        number = number - Math.pow(2,exponent);
        console.log(number);
    }
    let sum = 0;
    expArray.forEach(element => {
        sum = sum + Math.pow(10,element);
        console.log(sum);
    });
    return(sum);
}

console.log(binaryConvert(69));