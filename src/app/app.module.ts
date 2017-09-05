import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
// import { OrderModule } from './order/order.module';
import { SearchService } from './service/search.service'
import { OwnerService } from './service/owner.service'
import { OrderService } from './service/order.service'
import { FormsModule } from '@angular/forms';
import { SearchFilterOptionsPipe } from './pipes/searchFilterOption.pipe';
import { Ng2CompleterModule } from "ng2-completer";
// import { AppRouteModule } from './app-routing.module'
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './contact/about.component';
import { ParamGuardService } from './service/params.service';
import { ReportService } from './service/report.service';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { OwnerComponent } from './owner/owner.component';
import { ReportComponent } from './reports/report.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/register.component';
import { AuthGuard } from './service/auth.guard';
import { GrowlModule } from 'primeng/primeng';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { AccordionModule } from 'primeng/primeng';

// import { OrderRouteModule } from './order/order-routing.module' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, CalendarModule, SharedModule, PrimeTemplate, DropdownModule, ButtonModule } from 'primeng/primeng';
import { OrderComponent } from './order/order.component'
import { AddressComponent } from './address/address.component'
import { PhoneNumberFormatDirective } from './directives/phonenumber.format.directive'
import { PaymentComponent } from './payment/payment.component'
import { OrderConfirmComponent } from './order/order.confirm.component'
import { ForgotPasswordComponent } from './login/forgotPassword.component';
import { ResetPasswordComponent } from './login/resetPassword.component';
import { FoodModule } from './foodcorner/food.module'
import { CommonModule } from './layout/common.module'
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './dynamic/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic/dynamic-form.component';
import { DynamicEmitterService } from './event/dynamic.emitter.service';

@NgModule({
  declarations: [
    AppComponent, SearchFilterOptionsPipe, SearchComponent, AboutComponent,
    ContactComponent, OwnerComponent, ReportComponent, LoginComponent,
    LogoutComponent, RegistrationComponent,
    OrderComponent, AddressComponent, PhoneNumberFormatDirective, PaymentComponent, OrderConfirmComponent, ForgotPasswordComponent,
    ResetPasswordComponent, DynamicFormQuestionComponent, DynamicFormComponent
  ],
  imports: [
    BrowserModule, HttpModule, Ng2CompleterModule, FormsModule, DataTableModule, CalendarModule, SharedModule, DropdownModule, ButtonModule, GrowlModule
    , ReCaptchaModule, AccordionModule, BrowserAnimationsModule, ReactiveFormsModule, FoodModule, CommonModule,
  ],
  providers: [AuthGuard, SearchService, ParamGuardService, OrderService, OwnerService, ReportService, LoginService, RegisterService, DynamicEmitterService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
