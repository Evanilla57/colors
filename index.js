const inquirer = require('inquirer');
const fetch = require('node-fetch');

// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
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
        },)
    // // promises are chained to directly pass inquirer data into fetch request
    // .then((res) => fetch(`https://api.github.com/users/${res.username}`))
    // // promises are chained to parse the request for the json data
    // .then((res) => res.json())
    // // json data is accepted as user and logged to the console
    // .then((user) => console.log(user));
