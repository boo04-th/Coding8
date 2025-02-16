//Task 1: Function Declaration
//Fuction to calculate net salary 
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Calculating net salary by adding the base salary and bonus 
    console.log (`Net Salary: $${netSalary.toFixted(2)}`); //Logging the net salary to the console
}

//Test cases
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

//Task 2: Function Expression
//Function expression to calculate the final price
let calculateDiscount = function(price, discountRate){
    let finalPrice = price - (price * discountRate); //Calculating the final price by subtracting the discount
    console.log(`Final Prive: $${finalPrice.toFixted(2)}`); //Logging the final price 
}

//Test cases
calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"