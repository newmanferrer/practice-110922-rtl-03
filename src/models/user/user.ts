export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
