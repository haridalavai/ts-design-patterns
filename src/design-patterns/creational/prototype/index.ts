import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let rectangle = new Rectangle({ color: "red", x: 10, y: 20 }, 100, 200);
let circle = new Circle({ color: "blue", x: 30, y: 40 }, 50);

let clonedRectangle = rectangle.clone();
let clonedCircle = circle.clone();

console.log(clonedRectangle);
console.log(clonedCircle);
console.log(clonedRectangle === rectangle ? "not cloned" : "cloned");
console.log(clonedCircle === circle ? "not cloned" : "cloned");
