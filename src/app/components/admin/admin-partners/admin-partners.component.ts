import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/shared/auth.service";
import { Partner } from "src/app/models/partner";
import { Router } from "@angular/router";

@Component({
  selector: "admin-partners",
  templateUrl: "./admin-partners.component.html",
  styleUrls: ["./admin-partners.component.scss"],
})
export class AdminPartnersComponent implements OnInit {
  public partners: Partner[] = [];

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllPartners();
  }

  getAllPartners() {
    this.httpClient
      .get<Partner[]>(`http://localhost:3000/partner/`)
      .subscribe((response) => {
        this.partners = response;
      });
  }

  navigateToOrders(id: number) {
    this.router.navigate([`/admin/partner/${id}/orders`]);
  }

  navigateToDishes(id: number) {
    this.router.navigate([`/admin/partner/${id}/dishes`]);
  }
}
