// TODO: call in shapes constructor

// TODO: set up test suites - 3?

// TODO: set up test cases for each shape
    // test for render() method that returns str for corresponding SVG file w/given shape color
    // EXAMPLE) 
    // const shape = new Triangle();
    // shape.setColor("blue");
    // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const Shape = require("..shapes.js");

// creates a test suite for Shape
describe("Shape", () => {
    // creates test to check that Triangle renders Triangle svg w/ the specified color
    describe("Triangle", () => {
        it("should render a triangle svg with the color green", () => {
            const shape = new Triangle();
            shape.shapeColor("green");

        });
    });
});