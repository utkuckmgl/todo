import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  user: any;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  alert() {
    alert("working");
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log("Loggen in succesfully");
      },
      error => {
        console.log("error");
        // this.alertifyService.alertify(error)
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    console.log("logged out");
    this.router.navigate(["/home"]);
  }
}
