import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import {TableComponent} from "./table/table.component";
import {AddCustomerComponent} from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
  { path: 'table', component: TableComponent },
  { path: 'createCustomer', component: AddCustomerComponent },
  { path: 'createProduct', component: AddProductComponent },
  { path: 'createPurchase', component: AddPurchaseComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
