// imports inquirer module
const inquirer = require("inquirer");

// imports fs to create svg files

// TODO: import shapes.js
// const shapes = require("./library/shapes");

// ====================================================================================================================
// TODO: create function to write svg file
// TODO: write function to create SVG file called 'logo.svg'
// second parameter would be function to create shape
// function writeToSVG() {
//     const = ();
//     fs.writeFile("./SVG-output-exs/logo.svg", shape function, err => {
//         if(err) {
//             console.err(err);
//         }
//     });
// };

// ====================================================================================================================


// TODO: set up an initializer function

function init() {

    const questions = inquirer.createPromptModule();

    // prompt(questions).then();
    questions([
        {
            type: "input",
            message: "Please enter up to 3 letters",
            name: "text",
            validate: function (text) {
                if (text.length <= 3) {
                    return true;
                } else {
                    console.log("Please enter no more than 3 letters");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter a color for your text",
            name: "textColor",
        },
        {
            type: "rawlist",
            message: "Please select desired shape",
            choices: [
                "triangle",
                "circle",
                "square",],
            name: "type",
        },
        {
            type: "input",
            message: "Please enter a color for the shape",
            name: "shapeColor",
        }

    ])

        // TODO: console log data in terminal 
        .then((data) => {
            console.log("ANSWERS", data);
            // console.log(data.text);
            // console.log(data.textColor);
            // console.log(data.type);
            // console.log(data.shapeColor);
             // TODO: pass function to create svg file
            console.log("Generated logo.svg");
        });
    // pass user data from terminal to shapes?
};

// ====================================================================================================

// TODO: call init function @ end of file
init();


// then 300x200 pixel img that matches choices is shown



