export class Product {
  private parts: string[] = [];
  public add(part: string): void {
    this.parts.push(part);
  }

  public getProduct(): string {
    return this.parts.join(", ");
  }
}
