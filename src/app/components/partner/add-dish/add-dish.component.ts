import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { DishType } from 'src/app/models/dish-type';
import { Dish } from '../../../models/dish';

@Component({
  selector: 'add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
})
export class AddDishComponent implements OnInit {
  public dishTypes: DishType[] = [];
  public selectedDishType: String;
  public newDish: Dish = new Dish();
  errors: {}[] = [];

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getDishTypes();
  }

  getDishTypes() {
    this.httpClient
      .get<DishType[]>(`http://localhost:3000/dishTypes`)
      .subscribe((response) => {
        this.dishTypes = response;
      });
  }

  createDish() {
    let hasError = false;

    this.errors = [];

    if (!this.newDish.name || this.newDish.name.trim() === '') {
      this.errors.push({
        name: 'Dish name is mandatory',
      });
      hasError = true;
    }

    if (!this.newDish.description || this.newDish.description.trim() === '') {
      this.errors.push({
        description: 'Dish description is mandatory',
      });
      hasError = true;
    }

    if (!this.selectedDishType) {
      this.errors.push({
        dishType: 'Dish type is mandatory',
      });
      hasError = true;
    }

    if (!hasError) {
      const options = {
        name: this.newDish.name,
        description: this.newDish.description,
        image: this.newDish.image ? this.newDish.image : '',
        dishType: this.selectedDishType,
      };

      this.httpClient
        .post(
          `http://localhost:3000/partner/addDish/${localStorage.getItem(
            '_id'
          )}`,
          options
        )
        .subscribe((res) => {
          this.router.navigate(['partner/dishes']);
        });
    }
  }
}
