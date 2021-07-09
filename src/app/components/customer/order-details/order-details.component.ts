import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/models/order";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"],
})
export class OrderDetailsComponent implements OnInit {
  order: Order;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    const id = this.activeRoute.snapshot.params.id;
    this.httpClient
      .get<Order>(`http://localhost:3000/orderDetails/${id}`)
      .subscribe(
        (response) => {
          this.order = new Order(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  navigateToOrder(orderId: number) {
    this.router.navigate(["/order"], { queryParams: { id: orderId } });
  }
}
