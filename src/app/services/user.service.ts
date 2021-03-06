import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../datamodel/user';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {

  }
  // API: GET /users API_URL
  public getAllUsers() {
    return this.http.get<User[]>(API_URL + '/users');
  }


  // API: POST /user
  public createUser(user: User) {
    return this.http.post<Boolean>(API_URL, '/create');
  }

 // API: POST /user
  public authUser(user: User) {
    return this.http.post<User>(API_URL, '/auth');
  }

}
