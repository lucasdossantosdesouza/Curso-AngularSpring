import { LoginComponent } from './component/security/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const ROUTES: Routes = [
    {path: '', component : HomeComponent},
    {path:'login', component : LoginComponent}
]

export const routes:ModuleWithProviders = RouterModule.forRoot(ROUTES);
