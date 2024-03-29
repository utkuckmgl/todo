import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  constructor(private http:HttpClient) { }
  ngOnInit() {
  }

  cancelRegisterMode(e){
    this.registerMode=e;
  }
  registerToggle() {
    this.registerMode=!this.registerMode;
  }


}
