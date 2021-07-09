import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageOfflineComponent } from "./message-offline.component";
import { ResponseHandlerModule } from "../response-handler/response-handler.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MessageOfflineComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ResponseHandlerModule,
    ReactiveFormsModule,
  ],
})
export class MessageOfflineModule {}
