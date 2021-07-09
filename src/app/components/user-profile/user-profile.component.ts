import { Customer } from "../../models/customer";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../shared/auth.service";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  editForm: FormGroup;
  currentUser: Customer = {};
  errors: {}[] = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    const id = this.actRoute.snapshot.paramMap.get("id");
    this.getUser();
  }

  get myForm() {
    return this.editForm.controls;
  }

  getUser() {
    const id = this.actRoute.snapshot.params.id;
    this.apiService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res;

      this.editForm.patchValue({
        email: this.currentUser.email,
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        address: this.currentUser.address,
        city: this.currentUser.city,
        postalCode: this.currentUser.postalCode,
        phoneNumber: this.currentUser.phoneNumber,
      });

      return res._id;
    });
  }

  initForm() {
    this.editForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: [""],
      city: [""],
      postalCode: [""],
      phoneNumber: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
      password: ["", [Validators.minLength(3), Validators.maxLength(10)]],
    });
  }

  updateUser(id) {
    if (this.editForm.valid) {
      this.apiService.updateUser(id, this.editForm.value).subscribe(
        (res) => {
          if (res) {
            this.editForm.reset();
            this.router.navigate([`/home`]);
          }
        },
        (payload) => {
          this.errors = payload.error;
        }
      );
    }
  }

  get firstName() {
    return this.editForm.get("firstName");
  }

  get lastName() {
    return this.editForm.get("lastName");
  }

  get email() {
    return this.editForm.get("email");
  }

  get phoneNumber() {
    return this.editForm.get("phoneNumber");
  }

  removeUser(id) {
    if (confirm("Are you sure you want to delete your profile?")) {
      this.apiService.deleteUser(id).subscribe((data) => {
        this.apiService.doLogout();
        this.router.navigate([`home`]);
      });
    }
  }
}
