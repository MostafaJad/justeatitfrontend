import { Component, OnInit } from "@angular/core";
import { Message } from "../../models/Message";

@Component({
  selector: "app-chat-form",
  templateUrl: "./chat-form.component.html",
  styleUrls: ["./chat-form.component.scss"],
})
export class ChatFormComponent implements OnInit {
  message: Message;
  messages: Message[];

  constructor() {
    this.message = new Message("", "assets/img/customer.png");
    this.messages = [
      new Message("How Can I Help you ?", "assets/img/avatar.png", new Date()),
    ];
  }

  ngOnInit(): void {}
}
