import { HELP_DESK_API } from './helpdesk.api';
import { Ticket } from './../model/ticket';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { 

  }

  createOrUpdate(ticket: Ticket){
    if(ticket.id != null && ticket.id != ''){
     return this.http.put(`${HELP_DESK_API}/api/ticket`,ticket);
    }else{
      ticket.id = null;
      ticket.status = 'New';
     return this.http.post(`${HELP_DESK_API}/api/ticket`,ticket);
    }
  }  

  findAll(){
     return this.http.get(`${HELP_DESK_API}/api/ticket/`);
  }

  listTicket(page: number , count: number){
    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}`);
  }

  findById(id: string){
   return this.http.get(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${HELP_DESK_API}/api/ticket/${id}`);
  }
  
  findByParams(page: number , count: number,t: Ticket, assigned:boolean){
    t.number = t.number != null ? t.number : 0;
    t.titulo = t.titulo == null ? "uninformed" : t.titulo;
    t.priority = t.priority == null ? "uninformed" : t.priority;
    t.status = t.status == null ?  "uninformed" : t.status;

    return this.http.get(`${HELP_DESK_API}/api/ticket/${page}/${count}/${t.titulo}/${t.status}/${t.priority}/${t.number}/${assigned}`);
  }

  changeStatus(id: number, ticket: Ticket){  
     return this.http.put(`${HELP_DESK_API}/api/ticket/${id}/${ticket.status}`,ticket);   
  }

  summary(){
    return this.http.get(`${HELP_DESK_API}/api/ticket/summary`);
 }

}
