export class Address {
  constructor(address1: string,
              address2: string,
              city: string,
              state: string,
              country: string,
              zipCode: string) {
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipCode = zipCode;
  }
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
