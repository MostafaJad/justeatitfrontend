import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Dish } from "../../../models/dish";
import { Router } from "@angular/router";

@Component({
  selector: "partner-dishes",
  templateUrl: "./partner-dishes.component.html",
  styleUrls: ["./partner-dishes.component.scss"],
})
export class PartnerDishesComponent implements OnInit {
  dishes: Dish[] = [];
  dish: Dish;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getPartnerDishes();
  }

  getPartnerDishes() {
    this.httpClient
      .get<Dish[]>(
        `http://localhost:3000/dishes/partner/${localStorage.getItem("_id")}/`
      )
      .subscribe((response) => {
        this.dishes = response;
        this.dish = this.dishes[0];
      });
  }

  editDish(id: String) {
    this.router.navigate([`/partner/editDish/${id}`]);
  }

  deleteDish(id: String) {
    this.httpClient
      .delete(`http://localhost:3000/partner/deleteDish/${id}/`)
      .subscribe(() => {
        this.getPartnerDishes();
      });
  }
}
