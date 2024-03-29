import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {

    this.authService.register(this.model).subscribe(
      next => {
        console.log("registration successful");
      },
      error => {
        console.log("error");
      }
    );
  }

  cancel() {
    //silinecek
    // var foundControls: Array<HTMLElement> = $('[id^="err_lbl_"]').toArray();
    // for (var i: number=0; i < foundControls.length; i++) {
    //   foundControls[i].remove();
    // }
    //silinecek

    this.cancelRegister.emit(false);
  }
}
