import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagerComponent } from './pages/customer-manager/customer-manager.component';

const routes: Routes = [{
  path: 'customer-manager',
  component: CustomerManagerComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
