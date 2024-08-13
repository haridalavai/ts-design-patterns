export interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

export abstract class Shape {
  properties: ShapeProperties;
  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }
  abstract clone(): Shape;
}
