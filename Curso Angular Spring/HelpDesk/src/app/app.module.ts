import { AlertModule } from './_alert/alert.module';
import { AlertService } from './_alert/alert.service';
import { AlertComponent } from './_alert/alert.component';
import { DialogService } from './services/dialog.service';
import { AuthInterceptor } from './component/security/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { TicketService } from './services/ticket.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/security/login/login.component';
import { AuthGuard } from './component/security/auth.guard';
import { UserNewComponent } from './component/user-new/user-new.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserNewComponent,
    UserListComponent,
    PaginationComponent
       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule 
   
  ],
  providers: [UsuarioService, TicketService, SharedService, AuthGuard,DialogService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
