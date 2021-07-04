import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  private endpointURL: string;
  private authHeaders: HttpHeaders | undefined;

  constructor() {
    this.endpointURL = environment.apiEndpoint;
  }

  getLoginStatus(): boolean {
    return sessionStorage.getItem('userGuid') !== null;
  }

  getAuthHeaders() {
    this.authHeaders = new HttpHeaders();

    if (sessionStorage.getItem('userGuid') === null) {
      // It must not be null, otherwise an error is thrown
      sessionStorage.setItem('userGuid', '');
    }

    this.authHeaders = this.authHeaders
      .set('Content-Type', 'application/json');

    return this.authHeaders;
  }
}
