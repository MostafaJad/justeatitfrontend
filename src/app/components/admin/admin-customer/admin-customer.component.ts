import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AdminCustomer } from "src/app/models/admin-customer";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: "admin-customer",
  templateUrl: "./admin-customer.component.html",
  styleUrls: ["./admin-customer.component.scss"],
})
export class AdminCustomerComponent implements OnInit {
  public roles: String[] = ["Admin", "Customer", "Partner"];
  public users: AdminCustomer[] = [];

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.httpClient
      .get<AdminCustomer[]>(`http://localhost:3000/user`)
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  editRole(id: number, role: string) {
    this.httpClient
      .put(`http://localhost:3000/user/${id}/editRole`, { role })
      .subscribe((res) => {
        alert("Role was changed successfully");
        this.getAllCustomers();
      });
  }

  deleteUser(id: number) {
    if (confirm("Are you sure you want to delete this user profile?")) {
      this.httpClient
        .delete(`http://localhost:3000/user/${id}`)
        .subscribe((res) => {
          this.getAllCustomers();
        });
    }
  }

  getId() {
    return localStorage.getItem("_id");
  }
}
