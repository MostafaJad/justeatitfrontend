import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPartnersComponent } from "./admin-partners.component";
import { ResponseHandlerModule } from "../../response-handler/response-handler.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AdminPartnersComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ResponseHandlerModule,
  ],
})
export class AdminPartnersModule {}
