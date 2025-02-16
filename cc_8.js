//Task 1: Function Declaration
//Fuction to calculate net salary 
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Calculating net salary by adding the base salary and bonus 
    console.log (`Net Salary: $${netSalary.toFixed(2)}`); //Logging the net salary to the console
};

//Test cases
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

//Task 2: Function Expression
//Function expression to calculate the final price
let calculateDiscount = function(price, discountRate){
    let finalPrice = price - (price * discountRate); //Calculating the final price by subtracting the discount
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); //Logging the final price 
};

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
};

//Test cases
calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

//Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) { //Function to calculate the total loan payment 
    let totalPayment = principal + (principal * rate * time);//Calculating the total payment
    console.log (`Total Payment: $${totalPayment.toFixed(2)}`);//Logging the total payment
};

// Test cases
calculateLoanPayment(1000, 0.05, 2); // "Total Payment: $1100.00"
calculateLoanPayment(5000, 0.07, 3); // "Total Payment: $6050.00"

//Task 6: Higher-Order Functions
function filterLargeTransactions(transactions, filterFunction) { //Function to filter large transactions
    let result = transactions.filter(filterFunction);//Applying the filter function to get large transactions
    console.log ("Large transaction:",result); //Logging the filtered transactions 
}; 

// Test case
let transactions = [200, 1500, 3200, 800, 2500];
filterLargeTransactions(transactions, amount => amount > 1000); 
// Expected output: [1500, 3200, 2500]

//Task 7: Closures
function createCartTracker() {//Closure function to track and maintain
    let total = 0; //Initalizing the total to 0
    return function(amount) { //Returning the function to add amounts
        total += amount;// Adding the amount to the total
        console.log (`Total Cart Value: $${total}`); //Logging the updated toal cart value
    };
};

// Creating a tracker instance
let cart = createCartTracker();

//// Test cases
cart(20); // "Total Cart Value: $20"
cart(35); // "Total Cart Value: $55"

//Task 8: Recursion in JaveScript
function calculateSavings(years, amount) { //Recursive function that projects the savings growth by 5%
    if (years >= 10) return `Projected savings: $${amount.toFixed(2)}`; //Checking if the years reached 10
    return calculateSavings(years + 1, amount * 1.05);//Increasing the amount by 5% and calling the function recursively 
};

// Test Cases
console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $6381.41"
