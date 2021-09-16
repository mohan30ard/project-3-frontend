import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './pages/home/welcome-page.component';
import { CustomerLoginComponent } from './pages/login/customer-login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddTrainComponent } from './pages/admin/add-train/add-train.component';

import { CustomerSidebarComponent } from './pages/customer/customer-sidebar/customer-sidebar.component';
import { CustomerWelcomeComponent } from './pages/customer/customer-welcome/customer-welcome.component';
import { ViewTrainsComponent } from './pages/admin/view-trains/view-trains.component';

import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewTrainRoutesComponent } from './pages/admin/view-train-routes/view-train-routes.component';
import { AddRouteComponent } from './pages/admin/add-route/add-route.component';
import { BookingformComponent } from './pages/customer/bookingform/bookingform.component';
import { PaymentComponent } from './pages/customer/payment/payment.component';
import { MatStepperModule } from '@angular/material/stepper';
import { TicketComponent } from './pages/customer/ticket/ticket.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CancellationComponent } from './pages/customer/cancellation/cancellation.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    CustomerLoginComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent,
    CustomerDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddTrainComponent,
    CustomerSidebarComponent,
    CustomerWelcomeComponent,
    ViewTrainsComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewTrainRoutesComponent,
    AddRouteComponent,
    BookingformComponent,
    PaymentComponent,
    TicketComponent,
    CancellationComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule, 
    ReactiveFormsModule,
    QRCodeModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
