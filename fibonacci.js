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

let fibsRec = (num) => {
    if ( num <= 0 ) return "Please enter valid argument";
    if (num === 1) {
        return [0];
    } else if ( num === 2 ) {
        return [0, 1];
    } else {
        let resultArray = fibsRec(num - 1);
        resultArray.push(resultArray[num - 2] + resultArray[num - 3]);
        return resultArray
    }

}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(4));
console.log(fibsRec(8));