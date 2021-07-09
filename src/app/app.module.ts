import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/authconfig.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./components/signup/signup.component";
import { AgmCoreModule } from "@agm/core";
import { DialogflowService } from "./services/dialogflow.service";

import { ResponseHandlerModule } from "./components/response-handler/response-handler.module";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { MessageItemComponent } from "./components/message-item/message-item.component";
import { MessageFormComponent } from "./components/message-form/message-form.component";
import { ChatFormComponent } from "./components/chat-form/chat-form.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserProfileComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageFormComponent,
    ChatFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ResponseHandlerModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAp53JpK3NUmD_7Sv5mMp5ElN4P6XLy1OE",
      libraries: ["places"],
    }),
  ],
  providers: [
    [DialogflowService],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
