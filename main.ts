#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        question: "\nWhat is TypeScript?\n",
        correct_answer: "\nA superset of JavaScript that compiles to plain JavaScript",
        incorrect_answers: ["\nA database management system", "\nA CSS preprocessor", "\nA version of Java"]
    },
    {
        question: "\nWhich company developed TypeScript?\n",
        correct_answer: "\nMicrosoft",
        incorrect_answers: ["\nGoogle", "\nFacebook", "\nApple"]
    },
    {
        question: "\nWhich file extension is used for TypeScript files?\n",
        correct_answer: "\n.ts",
        incorrect_answers: ["\n.js", "\n.tsx", "\n.jsx"]
    },
    {
        question: "\nHow do you define a variable in TypeScript?\n",
        correct_answer: "\nlet variableName: type = value;",
        incorrect_answers: ["\nvar variableName = value;", "\ndef variableName = value;", "\nlet variableName = value;"]
    },
    {
        question: "\nWhat is the purpose of the 'as' keyword in TypeScript?\n",
        correct_answer: "\nType assertion",
        incorrect_answers: ["\nType conversion", "\nType declaration", "\nType initialization"]
    },
    {
        question: "\nWhich of the following is not a TypeScript data type?\n",
        correct_answer: "\nbyte",
        incorrect_answers: ["\nnumber", "\nboolean", "\nstring"]
    },
    {
        question: "\nHow do you explicitly specify the return type of a function in TypeScript?\n",
        correct_answer: "\nfunction functionName(): returnType { ... }",
        incorrect_answers: ["\nfunction functionName() => returnType { ... }", "\nfunction functionName: returnType { ... }", "\nfunction functionName = returnType { ... }"]
    },
    {
        question: "\nWhat is the default access modifier for class members in TypeScript?\n",
        correct_answer: "\npublic",
        incorrect_answers: ["\nprivate", "\nprotected", "\nreadonly"]
    },
    {
        question: "\nHow do you create an interface in TypeScript?\n",
        correct_answer: "\ninterface InterfaceName { ... }",
        incorrect_answers: ["\nclass InterfaceName { ... }", "\ntype InterfaceName { ... }", "\ninterface: InterfaceName { ... }"]
    },
    {
        question: "\nWhich keyword is used to inherit a class in TypeScript?\n",
        correct_answer: "\nextends",
        incorrect_answers: ["\nimplements", "\ninherits", "\nderives"]
    },
    {
        question: "\nHow do you import a module in TypeScript?\n",
        correct_answer: "\nimport { moduleName } from 'module';",
        incorrect_answers: ["\nrequire('module');", "\nimport module from 'module';", "\ninclude 'module';"]
    },
    {
        question: "\nWhat does the '?' symbol indicate in a TypeScript function parameter?\n",
        correct_answer: "\nThe parameter is optional",
        incorrect_answers: ["\nThe parameter is required", "\nThe parameter is a rest parameter", "\nThe parameter is a default parameter"]
    },
    {
        question: "\nWhat is the difference between 'interface' and 'type' in TypeScript?\n",
        correct_answer: "\nInterfaces can be merged; types cannot",
        incorrect_answers: ["\nTypes can be merged; interfaces cannot", "\nThere is no difference", "\nInterfaces are used for primitive types; types are for objects"]
    },
    {
        question: "\nWhich of the following is true about 'any' type in TypeScript?\n",
        correct_answer: "\nIt can hold any type of value",
        incorrect_answers: ["\nIt can only hold string values", "\nIt can only hold number values", "\nIt can only hold boolean values"]
    },
    {
        question: "\nHow do you specify a readonly property in a TypeScript class?\n",
        correct_answer: "\nreadonly propertyName: type;",
        incorrect_answers: ["\nconstant propertyName: type;", "\nimmutable propertyName: type;", "\nstatic propertyName: type;"]
    }
];

// Function to shuffle answers
const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let startQuiz = async () => {
    let score: number = 0;

    // Prompt for user name
    let userName = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your name"
        }
    ]);

    console.log(`\nWelcome, ${chalk.green.bold(userName.username)}! Let's start the quiz.\n`);

    // Quiz loop
    for (let i = 0; i < questions.length; i++) {
        let answer = [...questions[i].incorrect_answers, questions[i].correct_answer];
        shuffleArray(answer);

        let ans = await inquirer.prompt([
            {
                type: "list",
                name: "quiz",
                message: `${chalk.bold(questions[i].question)}`,
                choices: answer.map((val: any) => val),
            }
        ]);

        if (ans.quiz === questions[i].correct_answer) {
            score++;
            console.log(chalk.green("Correct answer!\n"));
        } else {
            console.log(chalk.red("Incorrect answer."));
            console.log(chalk.yellow(`Correct answer is: ${questions[i].correct_answer}\n`));
        }

        console.log(chalk.blue.bold('----------------------------------------------\n'));
    }

    console.log(`Dear ${chalk.green.bold(userName.username)}, your final score is ${chalk.red.bold(score)} out of ${chalk.red.bold(questions.length)}.\n`);
};

startQuiz();
