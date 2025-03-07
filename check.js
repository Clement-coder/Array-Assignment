// Write a program that checks if there is any number greater than 50 in this array: [20, 30, 40, 60, 30, 80, 10]

let num = [20, 60, 40, 80, 45, 70, 30]

let greaterThan = num.filter(greater => greater > 50)
console.log(greaterThan)