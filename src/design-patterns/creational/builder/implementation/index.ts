import { type Builder, ConcreateBuilder } from "./Builder";
import { Director } from "./Director";

const builder = new ConcreateBuilder();
const director = new Director();

director.addBuilder(builder);

director.buildMVP();
const mvp = builder.getProduct();

director.buildFullProduct();
const fullProduct = builder.getProduct();

console.log("MVP: ", mvp);
console.log("Full Product", fullProduct);
