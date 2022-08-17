import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagerComponent } from './pages/customer-manager/customer-manager.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'customer-manager',
    component: CustomerManagerComponent,
  },
  {
    path: 'product-manager',
    component: ProductManagerComponent,
  }, 
  {
    path: 'user-manager',
    component: UserManagerComponent,
  },
  {
    path: 'invoicing',
    component: InvoicingComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
