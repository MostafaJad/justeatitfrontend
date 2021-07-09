import { Dish } from "./dish";

export class Partner {
  _id: string;
  rate: Number;
  address: String;
  city: String;
  postalCode: String;
  longitude: number;
  latitude: number;
  companyName: String;
  email: String;
  phoneNumber: number;

  // Relations
  dishes: Dish[];
}
