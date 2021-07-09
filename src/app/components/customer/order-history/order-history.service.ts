import { Inject } from "@angular/core";

@Inject({})
export class DishSearchService {
  getDishesByCoordinates(latitude: string, longitude: string) {}
}

interface DishSearch {}
