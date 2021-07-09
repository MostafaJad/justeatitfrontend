import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OrderDetailsComponent } from "./order-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [OrderDetailsComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule,
  ],
  providers: [],
})
export class OrderDetailsModule {}
