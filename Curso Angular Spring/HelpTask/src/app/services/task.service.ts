import { HELP_DESK_API } from './helpdesk.api';
import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { 

  }

  createOrUpdate(task: Task){
    if(task.id != null && task.id != ''){
     return this.http.put(`${HELP_DESK_API}/api/task`,task);
    }else{
      task.id = null;
      task.status = 'New';
     return this.http.post(`${HELP_DESK_API}/api/task`,task);
    }
  }  

  findAll(){
     return this.http.get(`${HELP_DESK_API}/api/task/`);
  }

  listtask(page: number , count: number){
    return this.http.get(`${HELP_DESK_API}/api/task/${page}/${count}`);
  }

  findById(id: string){
   return this.http.get(`${HELP_DESK_API}/api/task/${id}`);
  }

  delete(id: string){
    return this.http.delete(`${HELP_DESK_API}/api/task/${id}`);
  }
  
  findByParams(page: number , count: number,t: Task, assigned:boolean){
    t.number = t.number != null ? t.number : 0;
    t.titulo = t.titulo == null ? 'uninformed' : t.titulo;
    t.priority = t.priority == null ? 'uninformed' : t.priority;
    t.status = t.status == null ?  'uninformed' : t.status;

    return this.http.get(`${HELP_DESK_API}/api/task/${page}/${count}/${t.titulo}/${t.status}/${t.priority}/${t.number}/${assigned}`);
  }

  changeStatus(task: Task){  
     return this.http.put(`${HELP_DESK_API}/api/task/${task.id}/${task.status}`,task);   
  }

  summary(){
    return this.http.get(`${HELP_DESK_API}/api/task/summary`);
 }

}
