import { OrderItem } from "./order-item";
import { Customer } from "./customer";
import { Partner } from "./partner";
import { DishAvailability } from "./dish-availability";

export class Order {
  _id: string;
  status: number;
  orderedAt: Date;

  items: OrderItem[];
  customer: Customer;
  partner: Partner;

  constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }

  getTotal(): number {
    let total = 0;

    this.items.forEach((item) => {
      total +=
        item.quantity *
        (item.dishAvailability as DishAvailability).discountPrice;
    });

    return Math.round((total + Number.EPSILON) * 100) / 100;
  }

  getStatusName(): string {
    switch (this.status) {
      case 0:
        return "Pending";
      case 1:
        return "Completed";
      case 2:
        return "Canceled";
    }
  }
}
