
// TODO: set up test suites - 3?

// TODO: set up test cases for each shape
    // test for render() method that returns str for corresponding SVG file w/given shape color
    // EXAMPLE) 
    // const shape = new Triangle();
    // shape.setColor("blue");
    // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const Triangle = require("../shapes.js");

// creates a test suite for Shape
describe("Shape", () => {
    // creates test to check that Triangle renders Triangle svg w/ the specified color
    describe("Triangle", () => {
        it("should render a triangle svg with the color green", () => {
            const shape = new Triangle("AAA", "blue", "triangle", "green");
            shape.color;
            console.log(shape.color);
            // copied over polygon svg created in my Sandbox test files
            // expect(shape.render()).toEqual('<polygon points="0, 200 120, 0 300, 300" fill="green"/>');
        });
    });
});