import inquirer from "inquirer";

const answers = await inquirer. prompt([
    {
    name : "num1",
    type : "number" ,
    message : " please enter first number: ",
    },
    {
        name : "num2",
        type : "number" ,
        message : "please enter second number: ",
        },
{
name : "operator",
type : "list",
message : "Please select the operator",
choices: ["Addition","Subtraction","multiplication","Division"],
// choices: ["+","-","*","/"],
},
]);
// let number1 = answers.num1;
// let number2 = answers.num2;
// let opt = answers.operator;
// console.log(answers);
// console.log(number2);
// console.log(opt);
if (answers.operator === "Addition") {
console.log (answers . num1 + answers . num2); }
else if (answers.operator === "Multiplication") {
    console.log (answers . num1 * answers . num2);
}
else if (answers.operator === "Subtraction") {
    console.log (answers . num1 - answers . num2);
}
else if (answers.operator === "Division") {
    console.log (answers . num1 / answers . num2);
}
else {"Kindly select any one operator"}


