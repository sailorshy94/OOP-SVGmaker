// note: in SVG lang syntax = Rectangle(square), Circle(circle), Polygon(triangle)

class Shape {
    constructor(text, textColor, type, color) {
        this.text = text;
        this.textColor = textColor;
        this.type = type;
        this.color = color;
    }

    render() {
        console.log("");
    }
};

// --------------------------------------------------------------------------------------------

// extends creates triangle class that is a child of shape
class Triangle extends Shape {
    constructor(text, textColor, type, color) {
        // super calls Shape into constructor for Triangle
        super(text, textColor, type, color);
    }
    render() {
        return `<polygon points="0, 200 120, 0 300, 300" fill="${this.color}"/>`;
    }
};

//--------------------------------------------------------------------------------------------

// extends creates circle class that is a child of shape
class Circle extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
    }
};

// --------------------------------------------------------------------------------------------

// extends creates square class that is a child of shape
class Square extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
    render() {
        return `<rect x="0" y="0" width="200" height="200" fill="${this.color}"/>`;
    }
};

// TODO: create function to render shapes????

// let shape;

// if (type === "triangle") {
//     shape = "Polygon";
// }

// if (type === "Circle") {
//     shape = "Circle";
// }

// if (type === "square") {
//     shape = "Rectangle";
// }
// --------------------------------------------------------------------------------------------

module.exports = {Triangle, Circle, Square};
