//Grocery Bill Calculator
let item1 = Number(prompt("Enter price of item 1:"));
let item2 = Number(prompt("Enter price of item 2:"));
let item3 = Number(prompt("Enter price of item 3:"));

let total = item1 + item2 + item3;

let discount = 0;
if (total > 500) {
    discount = total * 0.10;
}

let finalBill = total - discount;

console.log("Total:", total);
console.log("Discount:", discount);
console.log("Final Bill:", finalBill);

//Student Result System


// let total = 0;

// for (let i = 1; i <= 5; i++) {
//     let marks = Number(prompt("Enter marks for subject " + i + ":"));
//     total += marks;
// }

// let average = total/ 5;
// let grade;

// if (average >= 80) {
//     grade = "A";
// } else if (average >= 60) {
//     grade = "B";
// } else if (average >= 40) {
//     grade = "C";
// } else {
//     grade = "Fail";
// }

// console.log("Total:", total);
// console.log("Average:", average);
// console.log("Grade:", grade);



//ATM Withdrawal System
// let balance = 1000;

// while (true) {
//     let withdraw = Number(prompt("Enter amount to withdraw:"));

//     if (withdraw > balance) {
//         console.log("Insufficient balance");
//     } else {
//         balance -= withdraw;
//         console.log("Remaining Balance:", balance);
//     }

//     let choice = prompt("Do you want to continue? (yes/no)");
//     if (choice === "no") {
//         break;
//     }
// }


//Restaurant Order System
// let burger = 500;
// let pizza = 1200;
// let drink = 100;

// let bQty = Number(prompt("Enter number of burgers:"));
// let pQty = Number(prompt("Enter number of pizzas:"));
// let dQty = Number(prompt("Enter number of drinks:"));

// let total = (burger * bQty) + (pizza * pQty) + (drink * dQty);

// let discount = 0;
// if (total > 2000) {
//     discount = total * 0.15;
// }

// let finalBill = total - discount;

// console.log("Total:", total);
// console.log("Discount:", discount);
// console.log("Final Bill:", finalBill);


// //Employee Salary Calculator
// let name = prompt("Enter employee name:");
// let hours = Number(prompt("Enter hours worked:"));
// let rate = Number(prompt("Enter hourly rate:"));

// let salary = hours * rate;

// let overtime = 0;
// if (hours > 40) {
//     overtime = (hours - 40) * rate * 1.5;
//     salary += overtime;
// }

// let tax = salary * 0.10;
// let finalSalary = salary - tax;

// console.log("Employee:", name);
// console.log("Final Salary:", finalSalary);