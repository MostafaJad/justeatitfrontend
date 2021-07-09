import { Dish } from "./dish";

export class DishAvailability {
  _id: string;
  startDate: Date;
  endDate: Date;
  originalPrice: number;
  discountPrice: number;
  quantity: number;
  quantityTotal: number;

  dish: Dish;

  orderSelected: number;

  constructor(obj?: Partial<DishAvailability>) {
    Object.assign(this, obj);
  }
}
