//Importing classes from shapes.js
const { Circle, Square, Triangle } = require('./shapes');

//Test to see if circle is rendered with selected color
describe('circleOne.render()', () => {
    it('Should return circle with selected color', () => {
        //arrange
        let shapeColor = 'blue';
        const circleOne = new Circle(shapeColor);
        //act
        const result = circleOne.render(shapeColor);
        //assert
        expect(result).toEqual(`<circle cx="150" cy="100" r="100" fill="blue"/>`
        )
    })
});

//Test to see if square is rendered with selected color
describe('squareOne.render()', () => {
    it('Should return square with selected color', () => {
        //arrange
        let shapeColor = 'blue';
        const squareOne = new Square(shapeColor);
        //act
        const result = squareOne.render(shapeColor);
        //assert
        expect(result).toEqual(`<rect x="50" height="200" width="200" fill="blue"/>`
        )
    })
});

//Test to see if triangle is rendered with selected color
describe('triangleOne.render()', () => {
    it('Should return triangle with selected color', () => {
        //arrange
        let shapeColor = 'blue';
        const TriangleOne = new Triangle(shapeColor);
        //act
        const result = TriangleOne.render(shapeColor);
        //assert
        expect(result).toEqual(`<polygon height="100%" width="100%" points="0,150 300,150 150,0" fill="blue"/>`
        )
    })
});