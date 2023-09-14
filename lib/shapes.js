class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    setText(textInput, textColor) {
        this.text = `<text x="150" y="110" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>`;
    };
    setShape(shapeChoice) {
        this.shape = shapeChoice.render();
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.shape}
        ${this.text}
        </svg>`;
    }
};

class Shape {
    // Defines a class called Shape which has a constructor intializing color

    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error("Render must be called by class of shape!")
    }
}
// Defines a Circle class that extends Shape and renders an SVG Circle
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    }
}
// Defines a Square class that extends Shape and renders an SVG Square
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`
    }
}
// Defines a Triangle class that extends Shape and renders an SVG Triangle
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        // Return triangle with selected color'
        return `<polygon height="100%" width="100%" points="0,150 300,150 150,0" fill="${this.shapeColor}"/>`
    }
};

function shapeMold(data) {
    const { textInput, textColor, shapeInput, shapeColor } = data;
    let shapeChoice;
    switch (shapeInput) {
        case "Circle":
            shapeChoice = new Circle(shapeColor);
            break;
        case "Square":
            shapeChoice = new Square(shapeColor);
            break;
        case "Triangle":
            shapeChoice = new Triangle(shapeColor);
            break;

        default:
            throw new Error("Please select valid shape.");
            break;
    }
    const newSVG = new SVG();
    newSVG.setText(textInput, textColor);
    newSVG.setShape(shapeChoice);
    return newSVG.render();
}

module.exports = shapeMold;