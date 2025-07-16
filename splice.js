//The splice() method adds new items to an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

//The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

//The splice() method adds new elements to an array, and returns an array with the deleted elements (if any):
let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
console.log(removed)

//The toSpliced() Method
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months)
const spliced = months.toSpliced(0, 1);
console.log(spliced)