import { User } from './datamodel/user';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = 'http://172.20.10.2:8080/quiz-manager-webapp/quiz-manager/';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/users');
  }

}
