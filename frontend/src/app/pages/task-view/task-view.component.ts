import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params ,Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  createNewList(){
    this.taskService.createList('Testing').subscribe((response:any)=>{
     console.log(response);
     
    })
  }
}
