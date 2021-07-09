import { Inject } from "@angular/core";
import { DishSearchModule } from "./dish-search.module";

@Inject({})
export class DishSearchService {
  getDishesByCoordinates(latitude: string, longitude: string) {}
}

interface DishSearch {}
