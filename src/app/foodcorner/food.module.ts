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

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule,
  ],
  providers: [AuthGuard, DynamicEmitterService],
})
export class FoodModule { }
