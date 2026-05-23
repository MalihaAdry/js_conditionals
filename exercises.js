//Free Drinks
// let burgerBill = 600;
// if(burgerBill > 500){
//     console.log('free coke');
// }
// else{
//     console.log('coke price: 30tk');
// }


/************************************************* */

// BMI Calculator and Health Category
// let weight = 85;
// let height = 1.62;
// let bmi = weight / height**2;
// if(bmi < 18.5){
//     console.log('you are underweight');
// }
// else if(bmi >= 18.5 &&  bmi <= 24.9){
//     console.log('you are normal');
// }
// else if(bmi >= 25 && bmi <= 29.9){
//     console.log('you are ovarweight');
// }
// else{
//     console.log('you are obese');
// }

/************************************************* */
// Grade Calculator
// let scoreAI = 45;
// let scoreDS = 45;
// let scoreEEE = 40;
// let totalScore = scoreAI + scoreDS + scoreEEE;
// const avgScore = totalScore / 3;
// if(avgScore >= 90 && avgScore <= 100){
//     console.log('Grade: A');
// }
// else if(avgScore >= 80 && avgScore <= 89){
//     console.log('Grade: B');
// }
// else if(avgScore >= 70 && avgScore <= 79){
//     console.log('Grade: C');
// }
// else if(avgScore >= 60 && avgScore <= 69){
//     console.log('Grade: D');
// }
// //else (avgScore >= 0 && avgScore <= 59)
// else {
//     console.log('Grade: F');
// }


/******************************* */
// 4....

// let finalScore = 30;
// if (finalScore >= 80){
//     console.log('go for a lunch');
// }
// else{
//     if (finalScore >= 60 && finalScore < 80){
//         console.log('good luck next time');
//     }
//     else{
//         if (finalScore >= 40 && finalScore < 60){
//             console.log('message unseen')
//         }
//         else{
//             console.log('get blocked');
//         }
//     }

// }

/******************************************** */
// 5.you have two numbers in two variables, called: num1, num2 .now declare a variable called result. if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

// write a simple if-else. 

// also, write it using ternary operator.

// let num1 = 20;
// let num2 = 35;
// let result1 = num1 * 2;
// let result2 = num1 + num2;

// if (num1 > num2){
//     let result = num1 * 2;
//     console.log(result);
// }
// else{
//     let result = num1 + num2;
//     console.log(result);
// }

// (num1 > num2) ? console.log(result1) : console.log(result2);

// let result = (num1 > num2) ? (num1 * 2) : (num1 + num2);
// console.log(result);


/**************************************************
 * 6.
 * Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
 */


let age = 14
let isStudent = true; 
let ticketFare = 800;
if (age < 10){
    console.log('free');
} 
else{
    if(isStudent){
        let discount = ticketFare * 50 / 100;
        ticketFare = ticketFare - discount;
        console.log(ticketFare);
    }
    else {
        if(age >= 60){
            let discount = ticketFare * 15 / 100;
            ticketFare = ticketFare - discount;
            console.log(ticketFare);
        }
        else{
            console.log(800)
        }
    }

}
