
//Task 1: Flexible String Manipulation with Functions
//Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
//Format the firstName and lastName so that the first letter of each is always capatilized.
//Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”





function calculateTotalPrice(price, quantity, taxRate, discount) {
    if (typeof price !== "number" || price <= 0 ||
        typeof taxRate !== "number" || taxRate < 0 ||
        typeof quantity !== "number" || quantity <= 0 ||
        typeof discount !== "number" || discount < 0
    ) {
        return "Invalid input";
    }



    let totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

console.log(calculateTotalPrice(40, 2, 0.07, 5)); // Output: 85.6
