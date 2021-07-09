import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DishSearchComponent } from "./dish-search.component";
import { DishSearchService } from "./dish-search.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DishSearchComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule,
    RouterModule,
  ],
  providers: [DishSearchService],
})
export class DishSearchModule {}
