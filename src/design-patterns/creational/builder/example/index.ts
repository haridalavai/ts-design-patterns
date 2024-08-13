import { CustomerBuilder } from "./CustomerBuilder";
import { CustomerDirector } from "./CustomerDirector";

const builder = new CustomerBuilder();
const director = new CustomerDirector();
director.addBuilder(builder);

const minCustomer = director.buildMinimalCustomer(
  "firstname",
  "lastname",
  "phone",
);
const completeCustomer = director.buildCompleteCustomer(
  "firstname",
  "lastname",
  "phone",
  "street",
  "city",
  "country",
);

console.log("min customer: ", minCustomer);
console.log("complete customer: ", completeCustomer);
