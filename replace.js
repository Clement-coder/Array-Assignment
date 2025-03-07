// Remove the 2nd and 3rd items from this array and replace them with "Mango" and "Soursop": ["Apple", "Banana", "Orange", "Guava"]

let firstItems = ["Apple", "Banana", "Orange", "Guava"];
console.log(firstItems);
firstItems.splice(1,2, "Mango", "Soursop");
console.log(firstItems)