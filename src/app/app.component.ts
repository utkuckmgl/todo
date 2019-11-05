import { Component, OnInit } from "@angular/core";
import { ToDoService } from "./_services/todo.service";
import { StatusService } from "./_services/status.service";
import { AuthService } from './_services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.authService.getDecodedToken()
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  
  status;
  title = "ToDoProject";

  // model;

  /**
   *
   */
  constructor(
    private toDoService: ToDoService,
    private statusService: StatusService,
    private authService: AuthService
  ) {
    this.toDoService.getToDos().subscribe(res => {
      let result: any;
      result = res;
      this.toDos = result;
    });

    this.statusService.getStatus().subscribe(res => {
      this.status = res;
    });
  }


  tabs: any[] = [
    {
      id: 0,
      text: "user",
      icon: "user",
      content: "User tab content"
    },
    {
      id: 1,
      text: "comment",
      icon: "comment",
      content: "Comment tab content"
    },
    {
      id: 2,
      text: "find",
      icon: "find",
      content: "Find tab content"
    }
  ];

  toDos: any[] = [];
  toDo: any[] = [];

  onRowInserted(event) {
    let comingEvent = event;
    let body: any = {};
    body.Name = event.data.name;
    body.Description = comingEvent.data.description;
    body.StatuId = comingEvent.data.statuId;
    this.toDoService.addToDos(body).subscribe(res => {
      this.toDoService.getToDos().subscribe(res => {
        let result: any;
        result = res;
        this.toDos = result;
      });
    });
  }

  onRowRemoved(event) {
    this.toDoService.deleteToDo(event.data.id);
  }
  onRowUpdated(event) {
    let comingEvent = event;
    let body: any = {};
    body.Name = event.data.name;
    body.Description = comingEvent.data.description;
    body.StatuId = comingEvent.data.statuId;
    this.toDoService.updateToDo(comingEvent.data.id, body).subscribe(res => {
      this.toDoService.getToDos().subscribe(res => {
        let result: any;
        result = res;
        this.toDos = result;
      });
    });
  }
}
