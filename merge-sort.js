// helper function to merge two already sorted arrays

function merge(arr1, arr2) {
    let resultArr = [];
    // While the sorted arrays still have elements, insert the smallest of the two arrays into the result array by shifting the [0] element
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            resultArr.push(arr1.shift());
        } else {
            resultArr.push(arr2.shift());
        }
    }
    return [...resultArr, ...arr1, ...arr2];
}


console.log(merge([1, 4], [2, 3, 7, 9]));


// merge sort recursive function utilizing merge helper

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let arrayMiddle = Math.floor(arr.length / 2);

    let leftArray = mergeSort(arr.slice(0, arrayMiddle));
    let rightArray = mergeSort(arr.slice(arrayMiddle));

    return merge(leftArray, rightArray);
}

let testArray = [3, 45, 6, -4, 23, 5, 17, 0];

console.log(mergeSort(testArray))