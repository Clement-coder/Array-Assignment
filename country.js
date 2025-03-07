// Write a program that checks if an array of countries consist of a specified country

let countries = ['Nigeria', 'USA', 'Canada', 'Germany', 'India'];

function includeCountry(arr,country){
    return arr.includes(country);
}

console.log(includeCountry(countries,'Nigeria'))