export class Address {
  constructor(
    public street: string,
    public city: string,
    public country: string,
  ) {}
}

export interface ICustomer {
  _firstname: string;
  _lastname: string;
  _phone: string;
  _address: Address | {};
}

export class Customer implements ICustomer {
  constructor(
    public _firstname: string,
    public _lastname: string,
    public _phone: string,
    public _address: Address | {},
  ) {}

  public getCustomer(): ICustomer {
    return {
      _firstname: this._firstname,
      _lastname: this._lastname,
      _address: this._address,
      _phone: this._phone,
    };
  }
}
