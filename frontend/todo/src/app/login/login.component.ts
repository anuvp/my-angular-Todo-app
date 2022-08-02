import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = '';
  passwd = '';
  errorMessage = 'Invalid Username or Password!';
  loginFail = false;

  constructor(private router: Router, private hauthService : HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hauthService.authenticateUser(this.uname,this.passwd))
    {
      this.router.navigate(['welcome',this.uname])
      this.loginFail=false;
    }
    else{
      this.loginFail = true;
    }
    
  }

}
