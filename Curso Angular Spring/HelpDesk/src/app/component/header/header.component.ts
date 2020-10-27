import { Usuario } from './../../model/usuario';
import { SharedService } from 'src/app/services/shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
   constructor() {
  
  }
 
  ngOnInit(): void {
 
  }

}
