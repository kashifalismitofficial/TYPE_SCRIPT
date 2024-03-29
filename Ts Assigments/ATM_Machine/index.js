import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let pinNumber = 1179;
console.log(`Enter this pin code ${pinNumber} below.`);
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }]);
if (pinAnswer.pin === pinNumber) {
    console.log(`Your Entered Correct Pin Which is ${pinNumber} `);
    let choosen = await inquirer.prompt([{
            name: "operation",
            message: "What you want to do?",
            type: "list",
            choices: ["Widraw", "Balance Check"]
        }]);
    if (choosen.operation === "Widraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount",
                type: "number"
            }
        ]);
        if (amountAns >= myBalance) {
            myBalance -= amountAns.Amount;
            console.log(`Your Current Balance is ${myBalance}$$`);
        }
        else {
            console.log("insufisient balance");
        }
    }
    if (choosen.operation === "Balance Check") {
        console.log(`Your Current Balance is ${myBalance}$$`);
    }
}
else {
    console.log(`Plz Enter a correct Pin`);
}
/* import inquirer from "inquirer"

let myBalance = 10000 //$$
let myPin = 1234;


let pinAnswer = await inquirer.prompt
    (
        [
            {
                name: "pin",
                message: "Enter Your Pin",
                type: "number"
            }
        ]
    );
// (pinAnswer.pin === myBalance) ye apny liki thi farq dekhay
if (pinAnswer.pin === myPin) {
    console.log("your pin code is correctn !! ");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance"]
            }
        ]
    );
    if (operationAns.operation === "withdraw") {

        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount ",
                    type: "number"
                }
            ]
        );

        myBalance -= amountAns.amount
        // ye jo console ka under ha is ko `` backtek ka under likhana tha
        console.log(`your remaining balance is ${myBalance}`)

    } else if (operationAns.operation === "check balance") {

        // ye jo console ka under ha is ko `` backtek ka under likhana tha
        console.log(`your balce is ${myBalance}`);

    }

}

else {
    console.log(" your pin code is incorrect !!");
}*/ 
