//Task 1: Function Declaration
//Fuction to calculate net salary 
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Calculating net salary by adding the base salary and bonus 
    console.log (`Net Salary: $${netSalary.toFixted(2)}`); //Logging the net salary to the console
}

//Test cases
calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"