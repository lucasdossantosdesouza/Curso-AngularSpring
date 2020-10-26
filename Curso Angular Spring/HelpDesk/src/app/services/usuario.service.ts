import { HELP_DESK_API } from './helpdesk.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

   }

   login(usuario: Usuario){
      return this.http.post(`${HELP_DESK_API}/api/auth`,usuario);
   }

   createOrUpdate(usuario: Usuario){
     if(usuario.id != null && usuario.id != ''){
      return this.http.put(`${HELP_DESK_API}/api/usuario`,usuario);
     }else{
       usuario.id = null;
      return this.http.post(`${HELP_DESK_API}/api/usuario`,usuario);
     }
   }

   findAll(page: number , count: number){
      return this.http.get(`${HELP_DESK_API}/api/usuario/${page}/${count}`);
   }

   findById(id: number){
    return this.http.get(`${HELP_DESK_API}/api/usuario/${id}`);
   }

   delete(id: number){
    return this.http.delete(`${HELP_DESK_API}/api/usuario/${id}`);
   }
   
}
