import { Product } from "./Product";

export interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
}

export class ConcreateBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public buildPartA(): void {
    this.product.add("Part A");
  }

  public buildPartB(): void {
    this.product.add("Part B");
  }

  public buildPartC(): void {
    this.product.add("Part C");
  }

  public getProduct(): Product {
    let result = this.product;
    this.reset();
    return result;
  }
}
