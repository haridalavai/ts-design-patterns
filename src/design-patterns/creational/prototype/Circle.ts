import { type ShapeProperties, Shape } from "./Shape";

class Circle extends Shape {
  public radius: number;
  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
    this.radius = radius;
  }
  clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

export { Circle };
