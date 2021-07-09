import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/shared/auth.service";
import { Order } from "src/app/models/order";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "admin-partner",
  templateUrl: "./admin-partner.component.html",
  styleUrls: ["./admin-partner.component.scss"],
})
export class AdminPartnerComponent implements OnInit {
  public orders: Order[] = [];
  public partnerId: String;

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService,
    public activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.partnerId = this.activeRoute.snapshot.paramMap.get("id");
    this.getPartnerOrders();
  }

  getPartnerOrders() {
    this.httpClient
      .get<Order[]>(`http://localhost:3000/ordersByPartner/${this.partnerId}`)
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
