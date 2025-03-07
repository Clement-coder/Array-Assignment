// Write a function that finds the first even number in an array

let arr = [5, 7, 9, 12, 15]

function findFirstEven(arr){
    return arr.find(num => num % 2 === 0);
}

console.log(findFirstEven(arr))