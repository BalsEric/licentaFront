import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../../interfaces/user";
import {LoginService} from "../../services/login.service";
import {UID} from "../../interfaces/UID";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  uid: string = "";
  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(): void {

    this.loginService.postUser(this.uid).subscribe({
      next: (response: UID) => {
        sessionStorage.setItem('userGuid', <string>response.uid);
        this.router.navigate(['home']);
      },
      error: err => {
        console.error('Error! ' + err);
        alert('Invalid user or password.');
      }
    });
  }
}


