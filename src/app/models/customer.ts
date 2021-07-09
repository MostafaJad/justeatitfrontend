export class Customer {
  constructor(init?: Partial<Customer>) {
    Object.assign(this, init);
  }
  // tslint:disable-next-line:variable-name
  _id?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phoneNumber?: number;
  email?: string;
  password?: string;
  lastAccess?: Date;
  role?: string;
}
