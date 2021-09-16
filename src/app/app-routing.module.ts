import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainComponent } from './pages/admin/add-train/add-train.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

import { ViewTrainsComponent } from './pages/admin/view-trains/view-trains.component';

import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';

import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { CustomerWelcomeComponent } from './pages/customer/customer-welcome/customer-welcome.component';
import { WelcomePageComponent } from './pages/home/welcome-page.component';
import { CustomerLoginComponent } from './pages/login/customer-login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewTrainRoutesComponent } from './pages/admin/view-train-routes/view-train-routes.component';
import { AddRouteComponent } from './pages/admin/add-route/add-route.component';
import { BookingformComponent } from './pages/customer/bookingform/bookingform.component';
import { PaymentComponent } from './pages/customer/payment/payment.component';
import { TicketComponent } from './pages/customer/ticket/ticket.component';
import { CancellationComponent } from './pages/customer/cancellation/cancellation.component';




const routes: Routes = [
  {
    path: "",
    component: WelcomePageComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: CustomerLoginComponent,
    pathMatch: 'full'
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'add-train',
        component: AddTrainComponent,
      },
      {
        path: 'trains',
        component: ViewTrainsComponent
      },
      {
        path: "view-category",
        component: ViewCategoryComponent,
      },
      {
        path: "add-category",
        component: AddCategoryComponent,
      },
      {
        // path:'view-routes/:tid/:tname',
        path: 'view-routes/:tid/:tname',
        component: ViewTrainRoutesComponent
      },
      {
        path: 'add-route/:tid/:tname',
        component: AddRouteComponent,
      },


    ]
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,

    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: CustomerWelcomeComponent,

      },
      {
        path: 'booking',
        component: BookingformComponent,
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'ticket',
        component: TicketComponent
      },
      {
        path:'cancellation',
        component:CancellationComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
