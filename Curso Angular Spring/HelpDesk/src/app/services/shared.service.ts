import { Usuario } from './../model/usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public static instance: SharedService = null;
  usuario: Usuario;
  password: string;
  showTemplate= new EventEmitter<boolean>();

  constructor() {
    SharedService.instance = SharedService.instance || this;
   }
}
