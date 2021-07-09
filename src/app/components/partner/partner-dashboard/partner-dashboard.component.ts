import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "src/app/models/order";

@Component({
  selector: "partner-dashboard",
  templateUrl: "./partner-dashboard.component.html",
  styleUrls: ["./partner-dashboard.component.scss"],
})
export class PartnerDashboardComponent implements OnInit {
  public orders: Order[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getPartnerOrders();
  }

  getPartnerOrders() {
    this.httpClient
      .get<Order[]>(
        `http://localhost:3000/ordersByPartner/${localStorage.getItem("_id")}`
      )
      .subscribe((response) => {
        this.orders = [];

        response.forEach((order) => {
          this.orders.push(new Order(order));
        });
      });
  }

  acceptOrder(id: number) {
    this.httpClient
      .put(`http://localhost:3000/acceptOrder/${id}/`, {})
      .subscribe((response) => {
        this.getPartnerOrders();
      });
  }

  declineOrder(id: number) {
    this.httpClient
      .put(`http://localhost:3000/declineOrder/${id}/`, {})
      .subscribe((response) => {
        this.getPartnerOrders();
      });
  }
}
