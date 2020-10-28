import { NgForm } from '@angular/forms';
import { AlertService } from './../../_alert/alert.service';
import { ResponseApi } from './../../model/response-api';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from './../../services/ticket.service';
import { SharedService } from './../../services/shared.service';
import { Ticket } from './../../model/ticket';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {
  
  @ViewChild("form")
  ticketnewForm:NgForm;
  ticket = new Ticket();
  shared: SharedService;
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  

  constructor(private ticketService: TicketService, private router: ActivatedRoute,
    public alertService: AlertService) {
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
    this.ticketService.findById(id).subscribe((responseApi: ResponseApi)=>{
      this.ticket = responseApi.data;
    
    }, error=>{     
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });     
    }     
    );
  }

  registrar(){
    this.ticket.usuario = this.shared.usuario;
    this.ticketService.createOrUpdate(this.ticket).subscribe(
      (responseApi: ResponseApi)=>{          
          let ticketRet: Ticket = responseApi.data;
          this.alertService.success(`Ticket ${ticketRet.titulo} salvo com sucesso `,
          { id: 'alert-1' });
          setTimeout(() => {
            this.alertService.clear('alert-1');
            this.ticket = new Ticket();
          }, 4000);
           
    });
  } 

 

}
