import { Page } from './../../model/page';
import { ResponseApi } from './../../model/response-api';
import { AlertService } from './../../_alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from './../../services/comentario.service';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  shared:SharedService;
  comentarios = new Array<Comentario>();
  idTask: string;
  page: Page;
 
  constructor(private comentarioService: ComentarioService, private router: ActivatedRoute
    ,public alertService: AlertService,private route:Router) {
      this.shared = SharedService.getInstance();
    }

  ngOnInit(): void {
    this.idTask = this.router.snapshot.params['id'];    
  }

  findByTask(page: number, count: number){   
    this.comentarioService.findByTaskId(page, count, this.idTask).subscribe((responseApi: ResponseApi)=>{
      this.comentarios = responseApi.data.content;     
      this.page = responseApi.data;
    }, error=>{
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });   

    }     
    );
  }

  changePage(event: { page: number; size: number; }) {
    this.findByTask(event.page, event.size);
  }

}
