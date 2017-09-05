import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodOrderComponent } from './foodorder.component';
const routes: Routes = [
  { path: 'foodOrder', component: FoodOrderComponent },
  // { path: 'order/:filterId/:medicineId', component: OrderComponent, canActivate: [AuthGuard] },
  // { path: 'order-confirm/:message', component: OrderConfirmComponent, canActivate: [AuthGuard] }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class FoodRouteModule { }
