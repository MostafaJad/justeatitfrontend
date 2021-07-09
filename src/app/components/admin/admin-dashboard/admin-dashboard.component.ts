import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Order } from "src/app/models/order";
import { Customer } from "../../../models/customer";
import { Partner } from "../../../models/partner";
import { AuthService } from "../../../shared/auth.service";
import { DishAvailability } from "../../../models/dish-availability";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed2 = true;

  public orders: Order[] = [];
  public customers: Customer[] = [];
  public dishesAv: DishAvailability[] = [];
  public partners: Partner[] = [];
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {
    this.readUser();
    this.readOrder();
    this.readDishAv();
  }

  ngOnInit() {}

  readUser() {
    this.httpClient
      .get<Customer[]>(`http://localhost:3000/user`)
      .subscribe((response) => {
        this.customers = [];
        response.forEach((customer) => {
          this.customers.push(new Customer(customer));
        });
      });
  }
  readOrder() {
    this.httpClient
      .get<Order[]>(`http://localhost:3000/orders/`)
      .subscribe((response) => {
        this.orders = [];
        response.forEach((orders) => {
          this.orders.push(new Order(orders));
        });
      });
  }
  readDishAv() {
    this.httpClient
      .get<DishAvailability[]>(`http://localhost:3000/dish-availability`)
      .subscribe((response) => {
        this.dishesAv = [];
        response.forEach((dishAvailability) => {
          this.dishesAv.push(new DishAvailability(dishAvailability));
        });
      });
  }
}
