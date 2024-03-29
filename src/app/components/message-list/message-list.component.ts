import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
} from "@angular/core";
import { Message } from "../../models/Message";
import { MessageItemComponent } from "../message-item/message-item.component";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.scss"],
})
export class MessageListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("messages")
  messages: Message[];

  @ViewChild("chatlist", { read: ElementRef }) chatList: ElementRef;
  @ViewChildren(MessageItemComponent, { read: ElementRef })
  chatItems: QueryList<MessageItemComponent>;

  constructor() {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.chatItems.changes.subscribe((elements) => {
      this.scrollToBottom();
    });
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    } catch (err) {
      console.log('Could not find the "chatList" element.');
    }
  }

  ngOnInit(): void {}
}
