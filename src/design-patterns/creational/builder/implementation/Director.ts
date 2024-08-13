import { ConcreateBuilder, type Builder } from "./Builder";

export class Director {
  private builder!: Builder;

  public addBuilder(builder: Builder) {
    this.builder = builder;
  }

  public buildMVP(): void {
    this.builder.buildPartA();
  }

  public buildFullProduct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}
