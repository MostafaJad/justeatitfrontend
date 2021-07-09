import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { DishType } from "src/app/models/dish-type";
import { Dish } from "../../../models/dish";

@Component({
  selector: "edit-dish",
  templateUrl: "./edit-dish.component.html",
  styleUrls: ["./edit-dish.component.scss"],
})
export class EditDishComponent implements OnInit {
  public dishTypes: DishType[] = [];
  public selectedDishType: String;
  public dish: Dish;
  errors: {}[] = [];

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getDish();
    this.getDishTypes();
  }

  getDishTypes() {
    this.httpClient
      .get<DishType[]>(`http://localhost:3000/dishTypes`)
      .subscribe((response) => {
        this.dishTypes = response;
      });
  }

  getDish() {
    const id = this.activeRoute.snapshot.params.id;
    this.httpClient
      .get<Dish>(`http://localhost:3000/dishes/${id}`)
      .subscribe((response) => {
        this.dish = response;
        this.selectedDishType = this.dish.dishType._id;
      });
  }

  typeChanged(e: any) {
    this.dish.dishType = this.dishTypes.find(
      (dishType) => dishType._id === e.target.value
    );
  }

  editDish() {
    let hasError = false;

    this.errors = [];

    if (!this.dish.name || this.dish.name.trim() == "") {
      this.errors.push({
        name: "Dish name is mandatory",
      });
      hasError = true;
    }

    if (!this.dish.description || this.dish.description.trim() == "") {
      this.errors.push({
        description: "Dish description is mandatory",
      });
      hasError = true;
    }

    if (!this.dish.dishType) {
      this.errors.push({
        dishType: "Dish type is mandatory",
      });
      hasError = true;
    }

    if (!hasError) {
      this.httpClient
        .put(
          `http://localhost:3000/partner/editDish/${this.dish._id}`,
          this.dish
        )
        .subscribe(
          (r) => {
            this.router.navigate(["partner/dishes"]);
          },
          (payload) => {
            this.errors = payload.error;
          }
        );
    }
  }
}
