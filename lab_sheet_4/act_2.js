class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
}

const rec_1 = new Rectangle(100,2);
const rec_2 = new Rectangle(300,2);

console.log("Area of the rectangle 1 is : "+rec_1.getArea());
console.log("Area of the rectangle 2 is : "+rec_2.getArea());
