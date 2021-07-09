import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishTypeService {

  apiUrl = 'http://localhost:3000/dishTypes';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }
}
