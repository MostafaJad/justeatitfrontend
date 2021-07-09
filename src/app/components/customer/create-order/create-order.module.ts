import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CreateOrderComponent } from "./create-order.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [CreateOrderComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    // CreateOrderService
  ],
})
export class CreateOrderModule {}
