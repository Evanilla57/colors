const inquirer = require('inquirer');
const {shapeMold} = require('./lib/shapes');

const fs = require('fs');

inquirer
    .prompt([{
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
        name: "shapeInput",
        message: "Choose a shape for your logo background:",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color name or hexidecimal number for your logo background shape:",
    },]
    ).then((data) => {
        fs.writeFile("logo.svg", shapeMold(data), (err) =>
            err ? console.log(err) : console.log("Success!"))
    });

    