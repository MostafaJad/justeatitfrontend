import { Order } from "./order";
import { DishAvailability } from "./dish-availability";

export class OrderItem {
  quantity: number;

  order: Order;
  dishAvailability: DishAvailability | string;

  constructor(obj?: Partial<OrderItem>) {
    Object.assign(this, obj);
  }
}
