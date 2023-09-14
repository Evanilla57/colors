const { Circle, Square, Triangle } = require('./shapes');


describe('circleOne.render()', () => {
    it('Should return circle with selected color', () => {
        //arrange
        let shapeColor = 'blue';
        const circleOne = new Circle(shapeColor);
        //act
        const result = circleOne.render(shapeColor);
        //assert
        expect(result).toEqual(`<circle cx="150" cy="100" r="100" fill="Blue"/>`
        )
    })
});

