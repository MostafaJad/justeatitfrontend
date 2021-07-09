import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home";
import { LoginComponent } from "./components/login";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from "./shared/auth.guard";
import { DishSearchComponent } from "./components/customer/dish-search";
import { AgmCoreModule } from "@agm/core";
import { DishSearchModule } from "./components/customer/dish-search";
import {
  OrderHistoryComponent,
  OrderHistoryModule,
} from "./components/customer/order-history";
import { CreateOrderComponent } from "./components/customer/create-order";
import { CreateOrderModule } from "./components/customer/create-order";
import {
  OrderDetailsComponent,
  OrderDetailsModule,
} from "./components/customer/order-details";
import { PartnerDishesComponent } from "./components/partner/partner-dishes/partner-dishes.component";
import { PartnerDishesModule } from "./components/partner/partner-dishes/partner-dishes.module";
import { AddDishModule } from "./components/partner/add-dish";
import { AddDishComponent } from "./components/partner/add-dish/add-dish.component";
import { PartnerDashboardComponent } from "./components/partner/partner-dashboard/partner-dashboard.component";
import { PartnerDashboardModule } from "./components/partner/partner-dashboard/partner-dashboard.module";
import { EditDishComponent } from "./components/partner/edit-dish/edit-dish.component";
import { EditDishModule } from "./components/partner/edit-dish/edit-dish.module";
import { ChatFormComponent } from "./components/chat-form/chat-form.component";
import {
  AdminCustomerComponent,
  AdminCustomerModule,
} from "./components/admin/admin-customer";
import {
  AdminPartnersComponent,
  AdminPartnersModule,
} from "./components/admin/admin-partners";
import { AdminPartnerComponent } from "./components/admin/admin-partner";
import { AdminPartnerDishesComponent } from "./components/admin/admin-partner-dishes";
import { AdminDashboardComponent } from "./components/admin/admin-dashboard";
import { MessageOfflineComponent } from "./components/message-offline";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "userprofile/:id",
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: "search", component: DishSearchComponent },
  { path: "history", component: OrderHistoryComponent },
  { path: "order/:id", component: CreateOrderComponent },
  { path: "orders/:id", component: OrderDetailsComponent },
  { path: "partner/dashboard", component: PartnerDashboardComponent },
  { path: "partner/dishes", component: PartnerDishesComponent },
  { path: "partner/addDish", component: AddDishComponent },
  { path: "partner/editDish/:id", component: EditDishComponent },
  { path: "admin/customerDashboard", component: AdminCustomerComponent },
  { path: "admin/partnerDashboard", component: AdminPartnersComponent },
  { path: "admin/partner/:id/orders", component: AdminPartnerComponent },
  { path: "admin/partner/:id/dishes", component: AdminPartnerDishesComponent },
  { path: "contactus", component: ChatFormComponent },
  { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: "message", component: MessageOfflineComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAp53JpK3NUmD_7Sv5mMp5ElN4P6XLy1OE",
      libraries: ["places"],
    }),
  ],

  exports: [
    RouterModule,
    DishSearchModule,
    OrderHistoryModule,
    CreateOrderModule,
    OrderDetailsModule,
    PartnerDishesModule,
    AddDishModule,
    PartnerDashboardModule,
    EditDishModule,
    AdminPartnersModule,
    AdminCustomerModule,
  ],
})
export class AppRoutingModule {}
