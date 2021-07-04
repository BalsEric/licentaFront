import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';
import {UID} from "../interfaces/UID";

@Injectable()
export class WardrobeService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  getAllClothes(): Observable<any> {
    return this.apiService.request<any>({
      method : 'GET',
      url : '/clothes'
    });
  }
}
