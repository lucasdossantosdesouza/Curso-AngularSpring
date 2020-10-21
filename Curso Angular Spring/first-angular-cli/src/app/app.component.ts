import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-cli';
  tasks = [];
  task = "";

  public add(): void{
    this.tasks.push(this.task);
  }
}
