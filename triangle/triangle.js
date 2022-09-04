export class Triangle {
    constructor(a, b, c) {
        this.a = a, this.b = b, this.c = c
    }

    get isEquilateral() {
        if (this.isInequality === true) {
            if (this.a === this.b && this.b === this.c) return true;
            else return false;
        } else return false;
    }

    get isIsosceles() {
        if (this.isInequality === true) {
            if (this.a === this.b || this.b === this.c || this.a === this.c) return true;
            else return false;
        } else return false;
    }

    get isScalene() {
        if (this.isInequality === true) {
            if (this.a !== this.b && this.b !== this.c && this.a !== this.c) return true;
            else return false;
        } else return false;
    }

    get isInequality() {
        if (this.a + this.b >= this.c && this.b + this.c >= this.a && this.a + this.c >= this.b && (this.a, this.b, this.c) !== 0) return true;
        else return false;
    }
}

const triangle0 = new Triangle(0, 0, 0);
console.log(triangle0.isEquilateral);

const triangle1 = new Triangle(2, 2, 2);
console.log(triangle1.isEquilateral);

const triangle2 = new Triangle(2, 3, 2);
console.log(triangle2.isIsosceles);

const triangle3 = new Triangle(3, 2, 2);
console.log(triangle3.isScalene);
