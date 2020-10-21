import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-cli';
  upperText = 'Display uppercase text';
  lowerText = 'Display lowercase text';
  percentValue: number = 0.5;
  data: Date = new Date();
  money: number = 580;
  user: User = {
    name:'LUCAS',
    age:30
  };
}
