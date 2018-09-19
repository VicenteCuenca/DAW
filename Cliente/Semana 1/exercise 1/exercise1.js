/**
 * Part 1
 * Create a function that receives 2 strings. It will print which is the longest (or if they're equal).
 * Example: "Coconut" is longer than "house" 
 * If a parameter is not a string, print an error instead. Call it several times.
 */
console.log("EXERCISE 1 - PART 1");

let stringLongest = (s1,s2)=>{
    if(s1.length > s2.length) return`${s1} is longer than ${s2}`; 
    if(s1.length < s2.length) return`${s2} is longer than ${s1}`; 
    return`${s1} is as long as ${s2}`; }


console.log(stringLongest("Coconut","house"));

/**
 * Part 2
 * Create an array with different value types (number, boolean, string, ...).
 * Create another array that has values from the first one converted to numbers (don't use parseInt or parseFloat)
 * but not the ones that couldn't be converted (NaN). 
 * Don't use for, foreach, or while loop. Instead use array methods like map and filter. Print the resulting array 
 */
console.log("EXERCISE 1 - PART 2");

let a = [4, true, 33, 1,"number", 9, 54];
let array = new Array(a.filter(num => !isNaN(num)).map(num => num*1));

console.log(array);

// let a = [4, 21, 33, 12, 9, 54, NaN];
// console.log(a.filter(num => !isNaN(num)));


/**
 * Part 3
 * Create a function that receives 3 parameters with default values (product -> "Generic product",
 * price -> 100, tax 21). Convert the product's name to a string and the other 2 parameters to numbers.
 * If price or tax cannot be converted to number, show an error.
 * Call this function several times, omitting parameters or sending not numeric values.
 */
console.log("EXERCISE 1 - PART 3");
function convertTry( product = "Generic product", price = "100", tax = "21"){
    product = product.toString();
    if(!Number(price)) console.error("Price is not a number.");
    if(!Number(tax)) console.error("Tax is not a number.");
}
convertTry("patatas",1);
convertTry("patatas",1,"23");
convertTry("patatas",1,"two");
convertTry("patatas");
convertTry();


/**
 * Part 4
 * Create an array with 4 values and do the following (use the correct array methods).
 * Add 2 elements at the beginning
 * Add 2 more at the end.
 * Delete positions 3,4 and 5
 * Insert 2 elements before the last element.
 * On each change, show the resulting array with its elements separated by '=>' (don't use any loop).
 */
console.log("EXERCISE 1 - PART 4");


/**
 * Part 5
 * Create an array with several strings. Using the reduce method, return a string
 * that is a concatenation of the first letter of every string in the array.
 */
console.log("EXERCISE 1 - PART 5");

/**
 * Part 6
 * Create an array with several strings. Using the reduce method, return the total length of all the strings.
 */
console.log("EXERCISE 1 - PART 6");


/**
 * Part 7
 * Create a function that receives an array as a parameter and destructure the first three elements
 * in the function declaration's parameters. They will have default values of 1, 2 and 3 if any of those
 * positions is empty. Show what you've received in the function's body.
 * Call that function several times with numeric arrays (you can use an empty array)
 */
console.log("EXERCISE 1 - PART 7");


/**
 * Part 8
 * Create a funcion that can receive as many numbers as you want by parameter. Use rest to group them in
 * an array and print the ones that are even and the ones that arre odd separately. 
 * Call this function several times with different values.
 */
console.log("EXERCISE 1 - PART 8");


/**
 * Part 9
 * Create a Map object. The key will be a student name, and the value an array with all his/her exam marks.
 * Iterate through the Map and show each student's name, the marks separated by '-' and the average mark (with 2 decimals).
 * Example: Peter (7.60 - 2.50 - 6.25 - 9.00). Average: 6.34
 */
console.log("EXERCISE 1 - PART 9");

/**
 * Create a function that receives an array, deletes its duplicated values and prints them.
 * Create a Set object to delete the duplicated values.
 */
console.log("EXERCISE 1 - PART 10");


