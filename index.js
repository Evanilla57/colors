const inquirer = require('inquirer');
const { shapeMold } = require('./lib/shapes');

const fs = require('fs');

//Inquirer with prompts to dictate the shape, shape color, text, and text color of logo
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
    //Then statement displays console message if text input does not meet criteria
    ).then((data) =>  {
        if (data.textInput.length < 1 || data.textInput.length > 3) {
            console.log('Logo text must include between 1-3 characters.')
            return;
        } else {
            //Creates .svg file using and named after selected data
            fs.writeFile(`examples/${data.textInput}-${data.shapeColor}-${data.shapeInput}-logo.svg`, shapeMold(data), (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        }
    });
