import { Component } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'licentaFront';
  isLoggedIn : boolean = false;
  constructor(private authService: AuthService,
              private router: Router) {
    router.events.subscribe(val => {
      this.isLoggedIn = authService.getLoginStatus();
    });
  }
  logout() {

  }
}
