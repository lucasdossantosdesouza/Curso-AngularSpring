import { ResponseApi } from './../../model/response-api';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { SharedService } from 'src/app/services/shared.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  @ViewChild("form")
  usernewForm:NgForm;
  usuario = new Usuario();
  shared:SharedService;
  usuarios:Array<Usuario>;
  message: {};
  classCss: {};
  page:number;
  count:number;

  constructor(private usuarioService: UsuarioService,
    private router:ActivatedRoute) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    let id: string = this.router.snapshot.params['id'];
    if(id != undefined){
      this.findByid(id);
    }
  }

  findByid(id: string){
    this.usuarioService.findById(this.usuario.id).subscribe((responseApi: ResponseApi)=>{
      this.usuario = responseApi.data;
      this.usuario.password = '';
    }, error=>{
      this.showMessage({
        type: 'error',
        text: error['error']['errors'][0]
      })
    }     
    );
  }

  findAll(){   
    this.usuarioService.findAll(this.page,this.count).subscribe((responseApi: ResponseApi)=>{
      this.usuarios = responseApi.data;
    }, error=>{
      this.showMessage({
        type: 'error',
        text: error['error']['errors'][0]
      })
    }     
    );
  }

  registrar(){
    this.message = {};
    this.usuarioService.createOrUpdate(this.usuario).subscribe((responseApi: ResponseApi)=>{
      this.usuario = new Usuario();
      let userRet: Usuario = responseApi.data;
      this.usernewForm.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registrado ${userRet.email}`
      })
    });
  }

  delete(){
    this.message = {};
    this.usuarioService.delete(this.usuario.id).subscribe((responseApi: ResponseApi)=>{
     this.showMessage({
        type: 'success',
        text: `Deletado `
      })
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

}
