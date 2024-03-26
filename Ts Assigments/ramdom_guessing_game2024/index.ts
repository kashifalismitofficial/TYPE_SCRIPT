#! /usr/bin/env node 
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please Guess a Number Between 1 to 6"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guess Right Number");
} else {
    console.log("Sorry!:) You gassed Wrong Number ");

}

