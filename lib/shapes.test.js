const Shapes = require('./shapes');

describe('circleOne.render()', () => {
    it('Should returnselected color', () => {
        //arrange
        let shapeColor = 'blue';
        const shape = new Circle(shapeColor);
        //act
        const result = shape.render(shapeColor);
        //assert
        expect(result).toEqual(`<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
        )
    })
});
