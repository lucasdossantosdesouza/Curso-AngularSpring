import { LoginComponent } from './component/security/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './component/security/auth.guard';

const routes: Routes = [ 
{ path: 'login', component: LoginComponent },
{ path: '', component: HomeComponent,  canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  constructor( private router: Router){
    
  }
 
 }
