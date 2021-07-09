import { Component } from "@angular/core";
import { Order } from "src/app/models/order";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"],
})
export class OrderHistoryComponent {
  orders: Order[] = [];

  constructor(private httpClient: HttpClient) {
    this.getCustomerOrders();
  }

  getCustomerOrders() {
    this.httpClient
      .get<Order[]>(
        `http://localhost:3000/orders/${localStorage.getItem("_id")}`
      )
      .subscribe(
        (response) => {
          this.orders = [];

          response.forEach((order) => {
            this.orders.push(new Order(order));
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
