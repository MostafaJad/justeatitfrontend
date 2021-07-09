import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Dish } from "src/app/models/dish";

@Component({
  selector: "admin-partner-dishes",
  templateUrl: "./admin-partner-dishes.component.html",
  styleUrls: ["./admin-partner-dishes.component.scss"],
})
export class AdminPartnerDishesComponent implements OnInit {
  dishes: Dish[] = [];
  dish: Dish;
  partnerId: String;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.partnerId = this.activeRoute.snapshot.paramMap.get("id");
    this.getPartnerDishes();
  }

  getPartnerDishes() {
    this.httpClient
      .get<Dish[]>(`http://localhost:3000/dishes/partner/${this.partnerId}/`)
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
