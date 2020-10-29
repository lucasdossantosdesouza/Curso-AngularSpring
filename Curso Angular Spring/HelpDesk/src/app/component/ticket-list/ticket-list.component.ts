import { ResponseApi } from './../../model/response-api';
import { Router } from '@angular/router';
import { AlertService } from './../../_alert/alert.service';
import { DialogService } from './../../services/dialog.service';
import { TicketService } from './../../services/ticket.service';
import { Page } from './../../model/page';
import { Ticket } from './../../model/ticket';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  shared:SharedService;
  tickets:Array<Ticket>; 
  paginas:Array<number>; 
  page: Page;
  count:number = 5;
  pag:number = 0;
  assignedToMe:boolean = false;
  ticketFilter =new  Ticket();

  constructor(private ticketService: TicketService,
    private router:Router,private dialogService: DialogService,
    public alertService: AlertService) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    this.findAll(this.pag, this.count);
  }

  findAll(page: number, count: number){   
    this.ticketService.listTicket(page, count).subscribe((responseApi: ResponseApi)=>{
      this.tickets = responseApi.data.content;     
      this.page = responseApi.data;
      this.paginas = [this.page.totalPages];
    }, error=>{
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });   

    }     
    );
  }

  filter(){ 
    this.pag = 0 ;
    this.count = 5; 
    this.ticketService.findByParams(this.pag, this.count,this.ticketFilter,this.assignedToMe)
    .subscribe((responseApi: ResponseApi)=>{
      this.ticketFilter.number = this.ticketFilter.number == 0 ? null : this.ticketFilter.number;
      this.ticketFilter.titulo = this.ticketFilter.titulo == 'uninformed' ? '' : this.ticketFilter.titulo;
      this.tickets = responseApi.data.content;
      this.page = responseApi.data;
      this.paginas = [this.page.totalPages];
    }, error=>{
      this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });     

    }     
    );
  }

  cleanFilter(){
    this.assignedToMe = false;
    this.pag = 0 ;
    this.count = 5;
    this.ticketFilter = new Ticket();
    this.findAll(this.pag, this.count);
  }

  edit(id: string){
      this.router.navigate(['/novo-ticket',id]);
  }

  detail(id: string){
    this.router.navigate(['/detail-ticket',id]);
  }

  delete(id: string){
    this.dialogService.confirm('Deseja Realmente excluir ticket')
    .then((candelete: boolean)=>{
      if(candelete){
        this.ticketService.delete(id).subscribe((responseApi: ResponseApi)=>{
          this.alertService.success('Excluido com sucesso',{ id: 'alert-1' });
          this.findAll(this.pag,this.count)
        }, error=>{
          this.alertService.error(error['error']['errors'][0],{ id: 'alert-1' });     

        }     
        );
      }
    })    
  }   

  changePage(event: { page: number; size: number; }) {
    this.findAll(event.page, event.size);
  }
  
}
