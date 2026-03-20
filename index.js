
//Task 1: Flexible String Manipulation with Functions
//Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
//Format the firstName and lastName so that the first letter of each is always capatilized.
//Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”


function formatFullname(firstName, lastName)
if (firstName === "" || lastName === "") {
    return "Please provide both first and last names.";
}

let capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
let capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
return ${ capitalizedFirstName } ${ capitalizedLastName };


console.log(formatFullname("Q", "Armstrong")); // Output: "Q Armstrong"
console.log(formatFullname("q", "armstrong"));   // Output: "Q Armstrong" 








//Task 2: Mathematical Operations with Multiple Parameters
//Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
//The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
//Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”


// Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before.




function calculateTotalPrice(price, quantity, taxRate, discount) {
    if (typeof price !== "number" || price <= 0 ||
        typeof taxRate !== "number" || taxRate < 0 ||
        typeof quantity !== "number" || quantity <= 0 ||
        typeof discount !== "number" || discount < 0
    ) {
        return "Invalid input";
    }
    console.log(calculateTotalPrice(40, 2, 0.07, 5)); // Output: 85.6



    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

console.log(calculateTotalPrice(40, 2, 0.07, 5)); // Output: 85.6





// Reflection Questions
// After completing this activity, take a few minutes to reflect on the following questions:

// How did you approach creating more flexible functions with parameters?
The first thing i did was jot down the parameters that i wanted to use in the function and also whent over pseudo - code. 
Then i thought about how to use those parameters in a way that would allow for different inputs and outputs



// What challenges did you face while incorporating conditional logic in your functions?

The main challenge i faced was making sure that the conditions were properly structured to handle all possible scenarios effectively.

// How does refactoring improve the readability and maintainability of your code?

Refactoring improves the readability and maintainability of your code by making it more organized easier to understand and simpler to modify in the future.