import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../service/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import { DynamicFormQuestionComponent } from '../dynamic/dynamic-form-question.component';
// import { DynamicFormComponent } from '../dynamic/dynamic-form.component';
import { DynamicEmitterService } from '../event/dynamic.emitter.service';
import { GalleriaModule } from 'primeng/primeng';
import { MenuComponent } from './menu.component';
import { OverviewComponent } from './overview.component';
import { FoodComponent } from './food.component';
import { LayoutComponent } from '../layout/layout.component';
import { CommonModule } from '../layout/common.module'
import { TabViewModule } from 'primeng/primeng';
import { FoodOrderComponent } from './foodorder.component';
import { ButtonModule } from 'primeng/primeng';
import { FoodRouteModule } from './food-routing.module';
import { FoodLayoutComponent } from './food.layout';
import { FoodOnlineOrderService } from '../service/foodonlineorder.service';



@NgModule({
  declarations: [
    FoodComponent, OverviewComponent, MenuComponent, FoodOrderComponent, FoodLayoutComponent
  ],
  imports: [
    GalleriaModule, FoodRouteModule, BrowserModule, HttpModule, FormsModule, ButtonModule, BrowserAnimationsModule, ReactiveFormsModule, CommonModule, ReactiveFormsModule, TabViewModule
  ],
  providers: [AuthGuard, DynamicEmitterService,FoodOnlineOrderService],
})
export class FoodModule { }
