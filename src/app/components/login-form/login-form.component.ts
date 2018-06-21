import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
// import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private router: Router, public dialog: MatDialog) {
  }
  /*constructor( private router: Router, public dialog: MatDialog,
    private authenticationService: AuthenticationService ) {
  }*/

  username: string;
  password: string;

  login(): void {

    if ( this.username === 'admin' && this.password === 'admin' ) {
     this.router.navigate(['users']);
    } else {
      alert('Invalid credentials');
    }

//    this.authenticationService.attemptAuthentication(this.username, this.password).subscribe(
//      data => {
//        this.token.saveToken(data.token);
//        this.router.navigate(['questions']);
//      }
//    );

  }

  ngOnInit() {
  }

}
