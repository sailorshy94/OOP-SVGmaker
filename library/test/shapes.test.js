const {Triangle, Circle, Square} = require("../shapes.js");


// creates a test suite for Shape
describe("Shape", () => {
    // creates test to check that Triangle renders Triangle svg w/ the specified color
    describe("Triangle", () => {
        it("should render a triangle svg with the color green", () => {
            const shape = new Triangle("", "", "triangle", "green");
            shape.color;
            // copied over polygon svg created in my Sandbox test files
            expect(shape.render()).toEqual('<polygon points="0, 200 120, 0 300, 300" fill="green"/>');
        });
    })
});


describe("Shape", () => {
    // creates test to check that Circle renders Circle svg w/ the specified color
    describe("Circle", () => {
        it("should render a circle svg with the color green", () => {
            const shape = new Circle("", "", "circle", "green");
            shape.color;
            // copied over circle svg created in my Sandbox test files
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green"/>');
        });
    });
});

// creates a test suite for Shape
describe("Shape", () => {
    // creates test to check that Square renders square svg w/ the specified color
    describe("Square", () => {
        it("should render a square svg with the color green", () => {
            const shape = new Square("", "", "square", "green");
            shape.color;
            // copied over circle svg created in my Sandbox test files
            expect(shape.render()).toEqual('<rect x="0" y="0" width="200" height="200" fill="green"/>');
        });
    });
});