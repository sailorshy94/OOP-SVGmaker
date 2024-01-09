// note: in SVG lang syntax = Rectangle(square), Circle(circle), Polygon(triangle)

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
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><polygon points="0, 200 120, 0 300, 300" fill="${this.color}"/><text x="120" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

//--------------------------------------------------------------------------------------------

// extends creates circle class that is a child of shape
class Circle extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

// --------------------------------------------------------------------------------------------

// extends creates square class that is a child of shape
class Square extends Shape {
    constructor(text, textColor, type, color) {
        super(text, textColor, type, color);
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="${this.color}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
};

// --------------------------------------------------------------------------------------------

module.exports = { Triangle, Circle, Square };
