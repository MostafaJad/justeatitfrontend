import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditDishComponent } from "./edit-dish.component";
import { ResponseHandlerModule } from "../../response-handler/response-handler.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [EditDishComponent],
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
export class EditDishModule {}
