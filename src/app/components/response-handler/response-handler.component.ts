import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { stringify } from "querystring";

@Component({
  selector: "app-response-handler",
  templateUrl: "./response-handler.component.html",
  styleUrls: ["./response-handler.component.scss"],
})
export class ResponseHandlerComponent implements OnInit {
  @Input() errors: object;
  public objectKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (typeof this.errors === "string") {
      let error = this.errors;
      this.errors = [error];
    }
  }

  isString(val) {
    return typeof val === "string";
  }
}
