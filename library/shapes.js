// note: in SVG lang syntax = Rectangle(square), Circle(circle), Polygon(triangle)

//  TODO: create classes for Triangle, Circle and Square

// common functions and properties can do in Shape parent class (use inheritance to reuse code in children)

class Shape {
    constructor(text, textColor, type, color) {
        this.text = text;
        this.textColor = textColor;
        this.type = type;
        this.color = color;
    }
};

// --------------------------------------------------------------------------------------------

// extends creates triangle class that is a child of shape
class Triangle extends Shape {
    constructor(text, textColor, type, color) {
        // super calls Shape into constructor for Triangle
        super(text, textColor, type, color);
    }
}
const triangle = new Triangle("AAA", "yellow", "triangle", "green");

console.log ("TEST", triangle);
// if ( === "triangle") { 
// }

// --------------------------------------------------------------------------------------------

// extends creates circle class that is a child of shape
class Circle extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
}

const circle = new Circle("BBB", "yellow", "circle", "green");

console.log ("TEST", circle);
// if ( === "circle") {

// }

// --------------------------------------------------------------------------------------------

// extends creates square class that is a child of shape
class Square extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
}

const square = new Square("CCC", "yellow", "square", "green");

console.log ("TEST", square);
// if ( === "square") {

// }

// --------------------------------------------------------------------------------------------

// TODO: export shapes
// module.exports = shape;
