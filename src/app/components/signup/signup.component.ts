import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors: {}[] = [];

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      address: [""],
      city: [""],
      postalCode: [""],
      phoneNumber: [""],
      email: [""],
      password: [""],
      role: ["Customer"],
    });
  }

  ngOnInit() {}

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe(
      (res) => {
        if (res) {
          this.signupForm.reset();
          this.router.navigate(["login"]);
        }
      },
      (payload) => {
        this.errors = payload.error;
      }
    );
  }
}
