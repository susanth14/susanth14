
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  isLoggedIn: boolean = false;
  constructor(private router: Router ) { }
  login() {
    const stored = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQiLCJ1c2VybmFtZSI6InN1c2FudGgifQ.bCyCS9xBfbm6mbaxk22LBDnbSnZDKd3mM0pGAoaaxFQ';
    localStorage.setItem('jwt', stored);
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      const tokenParts = jwtToken.split('.');
      if (tokenParts) {
        const payload = JSON.parse(atob(tokenParts[1]));
        const decodedUsername = payload.username;
        const decodedPassword = payload.password;
        if (this.username === decodedUsername && this.password === decodedPassword) {
          console.log('Login successful');
          this.isLoggedIn = true;
          this.router.navigate(['/view-cart']);
        } else {
          alert('Invalid username password');
        }
      }
    }
  }
}


























