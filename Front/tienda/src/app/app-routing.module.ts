import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagerComponent } from './pages/customer-manager/customer-manager.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';

const routes: Routes = [{
  path: 'customer-manager',
  component: CustomerManagerComponent,
}, {
  path: 'product-manager',
  component: ProductManagerComponent,
}, {
  path: 'user-manager',
  component: UserManagerComponent,
},
{
  path: 'invoicing',
  component: InvoicingComponent,
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
