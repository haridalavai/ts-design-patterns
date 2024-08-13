import { Address, Customer, type ICustomer } from "./Customer";

export interface ICustomerBuiler {
  addFirstname(firstname: string): ICustomerBuiler;
  addLastname(lastname: string): ICustomerBuiler;
  addPhone(phone: string): ICustomerBuiler;
  addAddress(address: {
    street: string;
    city: string;
    country: string;
  }): ICustomerBuiler;
  build(): ICustomer;
}

export class CustomerBuilder implements ICustomerBuiler {
  firstname: string = "";
  lastname: string = "";
  phone: string = "";
  address: Address | {} = {};
  public addFirstname(firstname: string): ICustomerBuiler {
    this.firstname = firstname;
    return this;
  }

  public addLastname(lastname: string): ICustomerBuiler {
    this.lastname = lastname;
    return this;
  }

  addPhone(phone: string): ICustomerBuiler {
    this.phone = phone;
    return this;
  }
  addAddress({
    street,
    city,
    country,
  }: {
    street: string;
    city: string;
    country: string;
  }): ICustomerBuiler {
    this.address = new Address(street, city, country);
    return this;
  }
  build(): ICustomer {
    return new Customer(
      this.firstname,
      this.lastname,
      this.phone,
      this.address,
    );
  }
}
