import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  // baseUrl: 'http://localhost:8080/home/';
  baseUrl: 'http://10.41.176.204:8080/quiz-manager-webapp/quiz-manager';
  

  constructor(private http: HttpClient) {
  }

  attemptAuthentication(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuthentication for user ::');
    //this.http.post<any>('http://10.41.176.204:8080/quiz-manager-webapp/quiz-manager/auth', credentials);
    return this.http.post<any>('http://10.41.176.204:8080/quiz-manager-webapp/quiz-manager/auth', credentials);
    // return this.http.post<any>('http://10.41.176.204:8080/token/generate-token', credentials);
  }

}
