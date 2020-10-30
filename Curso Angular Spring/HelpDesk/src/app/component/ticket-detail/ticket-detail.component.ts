import { ResponseApi } from './../../model/response-api';
import { AlertService } from './../../_alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from './../../services/ticket.service';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  shared:SharedService;
  ticket = new Ticket();
  
  constructor(private ticketService: TicketService, private router: ActivatedRoute
    ,public alertService: AlertService,private route:Router) {
      this.shared = SharedService.getInstance();
    }

  ngOnInit(): void {
    let id: string = this.router.snapshot.params['id'];
    if(id != undefined){
      this.findByid(id);
    }
  }
  findByid(id: string){
    this.ticketService.findById(id).subscribe((responseApi: ResponseApi)=>{
      this.ticket = responseApi.data; 
      this.ticket.data = new Date(this.ticket.data).toISOString();   
    }, error=>{     
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });     
    }     
    );
  }

  changeStatus(status: string){
    this.ticket.status = status;
    this.ticketService.changeStatus(this.ticket).subscribe((responseApi: ResponseApi)=>{
      this.ticket = responseApi.data; 
      this.ticket.data = new Date(this.ticket.data).toISOString();   
      this.alertService.success(`Ticket ${status} com sucesso`,{ id: 'alert-1' });   
    }, error=>{     
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });     
    }     
    );
  }

}
