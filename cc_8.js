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

//Task 3: Arrow Function
//Arrow function to calculate the service fee
let calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0;
    if (serviceType === "Premium") feeRate = 0.15; //Assigning different rates based on the service type
    else if (serviceType === "Standard") feeRate = 0.10;
    else if (serviceType === "Basic") feeRate = 0.05;

    let fee = amount * feeRate; //Calculating the fee by multiplying the amount
    console.log (`Service Fee: $${fee.toFixed(2)}`);//Logging the service fee to the console
};

// Test cases
calculateServiceFee(200, "Premium"); // "Service Fee: $30.00"
calculateServiceFee(500, "Standard"); // "Service Fee: $50.00"

//Task 4: Parameters and Arguments
//Fuction to calculate rental cost based on the car type, days
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRates = { "Economy": 40, "Standard": 60, "Luxury": 100 }; //Assigning the daily rate based on the car type
    let cost = days * dailyRates[carType]; //Calculating the total cost
    if (insurance) { //Adding the insurance cost of selected
        cost += days * 20;
    }
    console.log (`Total Rental Cost: $${cost}`); //Logging the total rental cost
}

//Test cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"