import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OrderHistoryComponent } from "./order-history.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [OrderHistoryComponent],
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
export class OrderHistoryModule {}
