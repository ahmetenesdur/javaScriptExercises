export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function resize(newWidth, newHeight) {
    this.height = newHeight;
    this.width = newWidth;
}

const size = new Size(1080, 764);
console.log(size.width);
// => 1080
console.log(size.height);
// => 764

size.resize(1920, 1080);
console.log(size.width);
// => 1920
console.log(size.height);
// => 1080

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function move(newX, newY) {
    this.x = newX;
    this.y = newY;
}

const point = new Position();
console.log(point.x);
// => 0
console.log(point.y);
// => 0

point.move(100, 200);
console.log(point.x);
// => 100
console.log(point.y);
// => 200

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        if (newSize.width < 1) {
            newSize.width = 1;
        }
        if (newSize.height < 1) {
            newSize.height = 1;
        }
        if (newSize.width + this.position.x > this.screenSize.width) {
            newSize.width = this.screenSize.width - this.position.x;
        }
        if (newSize.height + this.position.y > this.screenSize.height) {
            newSize.height = this.screenSize.height - this.position.y;
        }
        this.size = newSize
    }

    move(newPosition) {
        if (newPosition.x < 0) {
            newPosition.x = 0;
        }
        if (newPosition.y < 0) {
            newPosition.y = 0;
        }
        if (newPosition.x + this.size.width > this.screenSize.width) {
            newPosition.x = this.screenSize.width - this.size.width;
        }
        if (newPosition.y + this.size.height > this.screenSize.height) {
            newPosition.y = this.screenSize.height - this.size.height;
        }
        this.position = newPosition
    }
}

export function changeWindow(updatedWindow) {
    updatedWindow.resize(new Size(400, 300))
    updatedWindow.move(new Position(100, 150))
    return updatedWindow
}

const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
// => 800

const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
// => 600
console.log(programWindow.size.height);
// => 400

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
console.log(programWindow.position.x);
// => 50
console.log(programWindow.position.y);
// => 100

changeWindow(programWindow);
console.log(programWindow.size.width);
// => 400