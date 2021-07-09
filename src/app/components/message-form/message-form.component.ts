import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../../models/Message";
import { DialogflowService } from "../../services/dialogflow.service";

@Component({
  selector: "app-message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"],
})
export class MessageFormComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("message")
  message: Message;

  // tslint:disable-next-line:no-input-rename
  @Input("messages")
  messages: Message[];

  constructor(private dialogFlowService: DialogflowService) {}

  ngOnInit() {}

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService
      .getResponse(this.message.content)
      .subscribe((res) => {
        this.messages.push(
          new Message(res.response, "assets/img/avatar.png", new Date())
        );
      });

    this.message = new Message("", "assets/img/customer.png");
  }
}
