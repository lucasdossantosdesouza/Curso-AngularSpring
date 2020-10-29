import { Usuario } from 'src/app/model/usuario';
import { SharedService } from 'src/app/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  shared: SharedService;
  usuario:Usuario;

  constructor() { 
    this.shared = SharedService.getInstance();
    this.usuario = new Usuario();
  }
 
  ngOnInit(): void {
 
  }

  signOut(): void{
    this.shared.token = null;
    this.shared.usuario = null;
    window.location.href = '/login';
    window.location.reload();
  }

}
