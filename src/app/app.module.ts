import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxButtonModule,
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule
} from "devextreme-angular";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { NavComponent } from "./nav/nav.component";
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [AppComponent, HomeComponent, RegisterComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxTemplateModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ["localhost:44351"],
        whitelistedDomains: ["localhost:44398"],
        blacklistedRoutes: ["localhost:44398/api/auth"]
        // blacklistedRoutes: ["localhost:44351/api/auth"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
