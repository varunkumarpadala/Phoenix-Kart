// import { User } from './user';
import { PhoenixService } from './shared/phoenix.service';
// import { Order } from './order';
// import { Product } from './product';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoutingModule } from './app.route';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TermsofuseComponent } from './components/termsofuse/termsofuse.component';
import { AddpoComponent } from './components/addpo/addpo.component';
import { EditpoComponent } from './components/editpo/editpo.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatusComponent } from './components/status/status.component';
import { OpenOrdersComponent } from './components/open-orders/open-orders.component';
import { CompleteOrdersComponent } from './components/complete-orders/complete-orders.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    TermsofuseComponent,
    AddpoComponent,
    EditpoComponent,
    AdminComponent,
    StatusComponent,
    OpenOrdersComponent,
    CompleteOrdersComponent,
    AllOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [PhoenixService,BodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }