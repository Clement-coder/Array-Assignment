// Write a function that takes in an array and returns the sorted array\\

let num = [5, 2, 8, 1, 4];

function sorting(arr){
    return arr.slice().sort((you,me) => you - me);
}

let sortingNumbers = sorting(num)
console.log(sortingNumbers)