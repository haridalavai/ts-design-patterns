import { type ShapeProperties, Shape } from "./Shape.ts";

class Rectangle extends Shape {
  public width: number;
  public height: number;
  constructor(properties: ShapeProperties, width: number, height: number) {
    super(properties);
    this.width = width;
    this.height = height;
  }
  clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

export { Rectangle };
