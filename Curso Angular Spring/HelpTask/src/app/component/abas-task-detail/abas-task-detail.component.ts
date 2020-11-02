import { Task } from './../../model/task';
import { SharedService } from './../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abas-task-detail',
  templateUrl: './abas-task-detail.component.html',
  styleUrls: ['./abas-task-detail.component.css']
})
export class AbasTaskDetailComponent implements OnInit {

  shared:SharedService;
  idTask :string; 
  
  constructor( private router: ActivatedRoute
    ,private route:Router) {
      this.shared = SharedService.getInstance();
  }

  ngOnInit(): void {
    this.idTask = this.router.snapshot.params['id'];
    this.viewTaskDetail();
  }

  viewTaskDetail(){
    this.route.navigate(['/detail-task',this.idTask]);
  }

  viewTaskComentarios(){
    this.route.navigate(['/comentario-task',this.idTask]);
  }
  

}
