import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  goRegister() {
    this.router.navigate(['/register']);
  }

  recoverPassword() {
    this.router.navigate(['/recover-password']);
  }

  login(form: Form) {
    this.router.navigate(['/home/profile']);
  }

}
