


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
