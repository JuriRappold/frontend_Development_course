class Shape {
    area(){
        return 0
    }
}

class Rectangle extends Shape{
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width*this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius**2;
    }
}

const shapes = [new Shape(), new Rectangle(2,5), new Circle(5)]
console.log("for-in loop:")//gets the index
for (const s in shapes){
    //console.log(`${typeof s} Area: ${s.area}`);
    console.log(s)
}

console.log("for-of loop:")
for (const s of shapes){//gets the elements of the array; has to be iterable
    //console.log(`${typeof s} Area: ${s.area()}`);
    console.log(s)
}
console.log("forEach loop")//acts like a for-of loop
shapes.forEach((element) => console.log(element));
for (const t in shapes[1]){
    console.log(t)
}
