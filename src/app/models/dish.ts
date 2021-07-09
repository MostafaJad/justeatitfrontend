import { Partner } from "./partner";
import { DishType } from "./dish-type";
import { DishAvailability } from "./dish-availability";

export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;

  dishType: DishType;
  partner: Partner;
  dishAvailability: DishAvailability[] = [];

  constructor(obj?: Partial<Dish>) {
    Object.assign(this, obj);
  }
}
