import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "message-offline",
  templateUrl: "./message-offline.component.html",
  styleUrls: ["./message-offline.component.scss"],
})
export class MessageOfflineComponent implements OnInit {
  public messageForm: FormGroup;
  errors: {}[] = [];
  messageSent: boolean = false;

  constructor(
    private httpClient: HttpClient,
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.messageForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.pattern("^[0-9]+$")],
      message: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.messageSent = false;

    if (this.authService.isLoggedIn) {
      this.authService
        .getUserProfile(this.authService.getId())
        .subscribe((res) => {
          this.messageForm.patchValue({
            name: res.firstName,
            email: res.email,
            phone: res.phoneNumber,
          });
        });
    }
  }

  get name() {
    return this.messageForm.get("name");
  }

  get email() {
    return this.messageForm.get("email");
  }

  get phone() {
    return this.messageForm.get("phone");
  }

  get message() {
    return this.messageForm.get("message");
  }

  sendMessage() {
    if (this.messageForm.valid) {
      this.httpClient
        .post(`http://localhost:3000/message/`, this.messageForm.value)
        .subscribe((res) => {
          this.messageSent = true;
        });
    }
  }
}
