import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/auth.service";
import { Customer } from "../../models/customer";

import { Router } from "@angular/router";

@Component({
  selector: "login-app",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  errors: {}[] = [];
  currentUser: Customer = {};

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get email() {
    return this.signinForm.get("email");
  }

  get password() {
    return this.signinForm.get("password");
  }

  loginUser() {
    if (this.signinForm.status == "VALID") {
      this.authService.signIn(this.signinForm.value).subscribe(
        (r) => {
          localStorage.setItem("access_token", r.token);
          localStorage.setItem("_id", r.customer._id);
          localStorage.setItem("role", r.customer.role);
          switch (r.customer.role) {
            case "Admin":
              this.router.navigate([`/admin/dashboard`]);
              break;
            case "Customer":
              this.router.navigate([`/search`]);
              break;
            case "Partner":
              this.router.navigate([`/partner/dashboard`]);
              break;
            default:
              this.router.navigate([`/userprofile/${r.customer._id}`]);
              break;
          }
        },
        (payload) => {
          this.errors = payload.error;
        }
      );
    }
  }
}
