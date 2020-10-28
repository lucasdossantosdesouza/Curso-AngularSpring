import { DialogService } from './../../services/dialog.service';
import { Page } from './../../model/page';
import { ResponseApi } from './../../model/response-api';
import { Usuario } from 'src/app/model/usuario';
import { SharedService } from 'src/app/services/shared.service';
import {  Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  shared:SharedService;
  usuarios:Array<Usuario>; 
  paginas:Array<number>; 
  message: {};
  classCss: {};
  page: Page;
  count:number = 5;
  pag:number = 0;

  constructor(private usuarioService: UsuarioService,
    private router:Router,private dialogService: DialogService) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    this.findAll(this.pag, this.count);
  }

  findAll(page: number, count: number){   
    this.usuarioService.findAll(page,count).subscribe((responseApi: ResponseApi)=>{
      this.usuarios = responseApi.data.content;
      this.page = responseApi.data;
      this.paginas = [this.page.totalPages];
    }, error=>{
      this.showMessage({
        type: 'error',
        text: error['error']['errors'][0]
      })
    }     
    );
  }
  edit(id: string){
      this.router.navigate(['/novo-usuario',id]);
  }

  delete(id: string){
    this.dialogService.confirm('Deseja Realmente excluir usuário')
    .then((candelete: boolean)=>{
      if(candelete){
        this.message = {};
        this.usuarioService.delete(id).subscribe((responseApi: ResponseApi)=>{
         this.showMessage({
            type: 'success',
            text: 'Excluido com sucesso '
          });
          this.findAll(this.pag,this.count)
        }, error=>{
          this.showMessage({
            type: 'error',
            text: error['error']['errors'][0]
          })
        }     
        );
      }
    })    
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
  
  setNextPage(event: any){
    event.preventDefault();
    if(this.pag+1 < this.paginas.length){
      this.pag = this.pag + 1;
    }
    this.findAll(this.pag, this.count);
  }

  setPreviousPage(event: any){
    event.preventDefault();
    if(this.pag >0){
      this.pag = this.pag - 1;
    }
    this.findAll(this.pag, this.count);
  }

  setPage(i: any, event: any){
    event.preventDefault();   
    this.pag = i;   
    this.findAll(this.pag, this.count);
  }

}
