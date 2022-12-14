import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagerComponent } from './pages/customer-manager/customer-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductManagerComponent } from './pages/product-manager/product-manager.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { InvoicingComponent } from './pages/invoicing/invoicing.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagerComponent,
    ProductManagerComponent,
    UserManagerComponent,
    InvoicingComponent,
    ReportsComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
