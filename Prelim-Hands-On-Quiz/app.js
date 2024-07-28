// Prelim-Hands-On-Quiz/app.js

const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursWorkedPerDay = 4;
const daysWorkedPerWeek = 6;

const grossIncome = multiply(ratePerHour, multiply(hoursWorkedPerDay, daysWorkedPerWeek));
const tax = divide(grossIncome, 10);  
const sss = 1200;
const pagIbigFund = 300;
const philHealth = 400;

const totalDeductions = add(add(tax, sss), add(pagIbigFund, philHealth));
const netSalary = subtract(grossIncome, totalDeductions);

console.log(`The gross income is ${grossIncome}.`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sss}`);
console.log(`Pag-Ibig fund: ${pagIbigFund}`);
console.log(`PhilHealth: ${philHealth}`);
console.log(`Total deductions: ${totalDeductions}`);
console.log(`The net salary is ${netSalary}.`);
