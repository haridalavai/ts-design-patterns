import type { ICustomer } from "./Customer";
import type { ICustomerBuiler } from "./CustomerBuilder";

export class CustomerDirector {
  private builder!: ICustomerBuiler;
  public addBuilder(builder: ICustomerBuiler) {
    this.builder = builder;
  }

  public buildMinimalCustomer(
    firstname: string,
    lastname: string,
    phone: string,
  ): ICustomer {
    return this.builder
      .addFirstname(firstname)
      .addLastname(lastname)
      .addPhone(phone)
      .build();
  }

  public buildCompleteCustomer(
    firstname: string,
    lastname: string,
    phone: string,
    street: string,
    city: string,
    country: string,
  ): ICustomer {
    return this.builder
      .addFirstname(firstname)
      .addLastname(lastname)
      .addPhone(phone)
      .addAddress({
        street,
        city,
        country,
      })
      .build();
  }
}
