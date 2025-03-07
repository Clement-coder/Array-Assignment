// Write a function that doubles each number in an array and returns a new array

function doubleNumbers(arr){
    return arr.map(num => num *2)
}

console.log(doubleNumbers([1,2,3,4,5]))