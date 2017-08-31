import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './contact/about.component';
import { OwnerComponent } from './owner/owner.component';
import { ReportComponent } from './reports/report.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import {  ForgotPasswordComponent} from './login/forgotPassword.component';
import {  ResetPasswordComponent} from './login/resetPassword.component';
import { RegistrationComponent } from './registration/register.component';
import { AuthGuard } from './service/auth.guard';
import { OrderComponent } from './order/order.component';
import { FoodComponent } from './foodcorner/food.component';
import { OrderConfirmComponent } from './order/order.confirm.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'owner', component: OwnerComponent, canActivate: [AuthGuard] },
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
   { path: 'food', component: FoodComponent , canActivate: [AuthGuard]},
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'order/:filterId/:medicineId', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'order-confirm/:message', component: OrderConfirmComponent, canActivate: [AuthGuard] }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouteModule { }
