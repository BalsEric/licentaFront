import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';
import {UID} from "../interfaces/UID";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  postUser(uid: string): Observable<UID> {
    return this.apiService.request<UID>({
      method : 'POST',
      url : '/authenticate/'+ uid
    });
  }
}
