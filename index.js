// imports inquirer module
const inquirer = require("inquirer");
// imports fs to create svg files
const fs = require("fs");
// imports shapes.js
const { Triangle, Circle, Square } = require("./library/shapes");

// ====================================================================================================================

// set up an initializer function
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
            name: "color",
        }

    ])

        // console log data in terminal 
        .then((data) => {
            console.log("ANSWERS", data);
            // we want to decide with either if else statements or switch cases, if data.shape = circle then create a circle, and then pass it the necessary parameters
            let shape;
            if (data.type === "triangle") {
                shape = new Triangle(data.text, data.textColor, data.type, data.color);
            } else if (data.type === "circle") {
                shape = new Circle(data.text, data.textColor, data.type, data.color);
            } else {
                shape = new Square(data.text, data.textColor, data.type, data.color);
            };
            // passes function to create svg file
            return fs.writeFileSync("logo.svg", shape.render());
        });
    console.log("Generated logo.svg");
};

// ====================================================================================================

init();



