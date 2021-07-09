import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared/auth.service";
import { Customer } from "./models/customer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentUser: Customer = {};
  userId: string;
  title = "app";
  isCollapsed = true;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.doLogout();
  }

  public getRole() {
    return localStorage.getItem("role");
  }
}
