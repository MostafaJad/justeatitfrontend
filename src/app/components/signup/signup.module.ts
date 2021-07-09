import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { ResponseHandlerModule } from "../response-handler/response-handler.module";

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, ResponseHandlerModule],
})
export class SignupModule {}
