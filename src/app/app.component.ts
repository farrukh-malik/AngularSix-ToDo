import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  taskInput = '';
  taskArr = [];
  taskAdd() {
    this.taskArr.push(this.taskInput);
    console.log(this.taskArr);
    this.taskInput = '';
  }

  

}
