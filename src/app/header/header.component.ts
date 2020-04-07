import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  user$ = this.authService.user$;

  constructor(private readonly authService: AuthService) {}

  login() {
    this.authService.loginViaGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
