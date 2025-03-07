// Write a program that converts an array to a string with a specified separator

let arr = ["4","7","8","9","5"]

function arrayToString(arr, seperator){
    return arr.join(seperator)
}

console.log(arrayToString(arr, ', '))