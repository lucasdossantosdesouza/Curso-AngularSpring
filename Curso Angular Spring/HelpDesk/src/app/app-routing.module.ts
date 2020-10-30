import { SummaryComponent } from './component/summary/summary.component';
import { TicketDetailComponent } from './component/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './component/ticket-list/ticket-list.component';
import { TicketNewComponent } from './component/ticket-new/ticket-new.component';
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
{ path: 'novo-usuario/:id', component: UserNewComponent,  canActivate:[AuthGuard] },
{ path: 'lista-usuario', component: UserListComponent,  canActivate:[AuthGuard] },
{ path: 'novo-ticket', component: TicketNewComponent,  canActivate:[AuthGuard] },
{ path: 'novo-ticket/:id', component: TicketNewComponent,  canActivate:[AuthGuard] },
{ path: 'lista-ticket', component: TicketListComponent,  canActivate:[AuthGuard] },
{ path: 'detail-ticket/:id', component: TicketDetailComponent,  canActivate:[AuthGuard] },
{ path: 'summary', component: SummaryComponent,  canActivate:[AuthGuard] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  constructor( private router: Router){
    
  }
 
 }
