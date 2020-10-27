import { Page } from './../../model/page';
import { ResponseApi } from './../../model/response-api';
import { Usuario } from 'src/app/model/usuario';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usuario = new Usuario();
  shared:SharedService;
  usuarios:Array<Usuario>; 
  message: {};
  classCss: {};
  page: Page;

  constructor(private usuarioService: UsuarioService,
    private router:ActivatedRoute) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    this.findAll(0,5);
  }
  findAll(page: number, count: number){   
    this.usuarioService.findAll(page,count).subscribe((responseApi: ResponseApi)=>{
      this.usuarios = responseApi.data.content;
      this.page = responseApi.data;
      this.usuario = new Usuario();
    }, error=>{
      this.showMessage({
        type: 'error',
        text: error['error']['errors'][0]
      })
    }     
    );
  }
  private showMessage(message:{type:string, text:string}){
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }
  private buildClasses(type: string) : void{
      this.classCss ={
        'alert': true
      }
      this.classCss['alert'+ type] = true;
  }

  changePage(event) {
    this.findAll(event.page, event.size);
  }

}
