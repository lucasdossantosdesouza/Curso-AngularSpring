import { UserListComponent } from './component/user-list/user-list.component';
import { LoginComponent } from './component/security/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard } from './component/security/auth.guard';
import { UserNewComponent } from './component/user-new/user-new.component';

const routes: Routes = [ 
{ path: 'login', component: LoginComponent },
{ path: '', component: HomeComponent,  canActivate:[AuthGuard] },
{ path: 'novo-usuario', component: UserNewComponent,  canActivate:[AuthGuard] },
{ path: 'lista-usuario', component: UserListComponent,  canActivate:[AuthGuard] }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  constructor( private router: Router){
    
  }
 
 }
