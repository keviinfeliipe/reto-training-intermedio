import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetAccountComponent } from './auth/reset-account/reset-account.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HttpErrorResponse } from '@angular/common/http';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'restAccount', component: ResetAccountComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'heater', component: HttpErrorResponse},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
