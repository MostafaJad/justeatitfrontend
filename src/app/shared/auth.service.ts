import { Injectable } from "@angular/core";
import { Customer } from "../models/customer";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  endpoint = "http://localhost:3000/auth";
  userApi = "http://localhost:3000/user";
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {}; // TODO: please use the types!

  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: Customer): Observable<Customer> {
    const api = `${this.endpoint}/signup`;
    return this.http.post<Customer>(api, user);
  }

  signIn(user: Customer) {
    return this.http.post<any>(`${this.endpoint}/login`, user);
  }

  getToken() {
    return localStorage.getItem("access_token");
  }

  getId() {
    return localStorage.getItem("_id");
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem("access_token");
    return authToken !== null;
  }

  doLogout() {
    const removeToken = localStorage.removeItem("access_token");
    const role = localStorage.removeItem("role");
    if (removeToken == null) {
      this.router.navigate(["login"]);
    }
  }

  getUser() {
    return this.http.get(`${this.userApi}`);
  }

  getUserProfile(id): Observable<Customer> {
    const api = `${this.userApi}/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Update User
  updateUser(id, data): Observable<any> {
    const api = `${this.userApi}/${id}`;
    return this.http.put(api, data, { headers: this.headers });
  }

  // Delete User
  deleteUser(id): Observable<any> {
    const api = `${this.userApi}/${id}`;
    return this.http
      .delete(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
