import { Routes } from '@angular/router';
import { LoginComponent } from './coponentes/login/login.component';
import { HomeComponent } from './coponentes/home/home.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './coponentes/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'home',component:HomeComponent,canActivate:[authGuard]},
    {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]}
];
