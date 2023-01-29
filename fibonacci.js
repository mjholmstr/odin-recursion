let fibs = (num) => {
    let resultArray = [0, 1];
    if ( num <= 0 ) return "Please enter valid argument";
    if ( num === 1 ) return [0];
    if ( num === 2 ) return resultArray;
    for (let i = 2; i < num; i++) {
        resultArray.push(resultArray[i - 1] + resultArray[i - 2]);
    }
    return resultArray;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(4));
console.log(fibs(8));