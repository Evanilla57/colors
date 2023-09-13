const inquirer = require('inquirer');

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

function SVG(textInput, textColor, shape, shapeColor) {
    this.textInput = textInput;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
}

inquirer
    .prompt({
        type: "input",
        name: "textInput",
        message: "Enter up to 3 characters for your logo:",
    },
        {
            type: "input",
            name: "textColor",
            message: "Enter a color name or hexadecimal number for your logo's text:",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape for your logo background:",
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter a color name or hexidecimal number for your logo background shape:",
        },);
