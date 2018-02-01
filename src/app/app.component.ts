import {Component, OnInit} from '@angular/core';
import {AuthService, FacebookLoginProvider} from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;

  clicked = false;

  log = '';

  func: number;

  m = null;

  b = null;

  f = null;

  t = null;

  log2 = '';

  x = 0;

  updateLog(value: any): void {
    this.log += `Text changed to '${value}'\n`;
  }

  constructor(private authService: AuthService) {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(user): void {
    this.authService.signOut();
    this.loggedIn = (user = null);
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  performFunction(m: number, b: number, f: number, t: number): void {
    do {
      this.func = m * this.x + b;
      this.log2 += `${this.func}\n`;
      this.x++;
    } while (this.x < t);
  }
}
