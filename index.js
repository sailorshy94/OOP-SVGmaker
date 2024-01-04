// imports inquirer module
const inquirer = require("inquirer");

// TODO: import shapes.js
// const shapes = require("./library/shapes");

// TODO: set up an initializer function

function init() {

    // TODO: create prompt module to ask questions about SVG
    // input = 3 or less characters;
    // input text color choice = keyword or hexadecimal #);
    // select choice (rawlist) for shape: circle, triangle, square;
    // input shape color choice = keyword or hexadecimal #);

    const questions = inquirer.createPromptModule();

    // prompt(questions).then();
    questions([
        {
            type: "input",
            message:"",
            name: "",
            validate:,
        },
        {
            type: "input",
            message:"",
            name: "", 
        },
        {
            type: "rawlist",
            message:"",
            name: "",
        },
        {
            type: "input",
            message:"",
            name: "",
        }

    ]);
};

// ====================================================================================================

// TODO: call init function @ end of file


// TODO: write function to create SVG file called 'logo.svg'
// output text in CLI = "Generated logo.svg" after
// then 300x200 pixel img that matches choices is shown



