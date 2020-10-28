import { AlertService } from './../../_alert/alert.service';
import { ResponseApi } from './../../model/response-api';
import { ActivatedRoute} from '@angular/router';
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

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(private usuarioService: UsuarioService,
    private router:ActivatedRoute, public alertService: AlertService) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    let id: string = this.router.snapshot.params['id'];
    if(id != undefined){
      console.log(id);
      this.findByid(id);
    }
  }

  findByid(id: string){
    this.usuarioService.findById(id).subscribe((responseApi: ResponseApi)=>{
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

  registrar(){
    this.message = {};
    this.usuarioService.createOrUpdate(this.usuario).subscribe((responseApi: ResponseApi)=>{
      this.usuario = new Usuario();
      let userRet: Usuario = responseApi.data;
      this.alertService.success('Usuario Salvo com sucesso',{ id: 'alert-1' });
      //this.usernewForm.resetForm();
      
    });
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
