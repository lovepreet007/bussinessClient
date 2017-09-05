import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutRouteModule } from './layout-routing.module';
import { RouterModule, Routes } from '@angular/router';
// import { AppModule } from '../app.module';
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, LayoutRouteModule,RouterModule
  ],
  providers: [],
  exports: [LayoutComponent,RouterModule]
})
export class CommonModule { }
