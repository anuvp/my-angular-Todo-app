import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

    authenticateUser(uname: any, passwd: any)
    {
      if(uname ==='user1' && passwd === 'pwd1')
    {
      sessionStorage.setItem('authorizedUser', uname);
      return true;
    }
    return false;
  }

    checkForUserLoggedIn()
    {
      let user=sessionStorage.getItem('authorizedUser');
      return !(user===null);
     
    }

    logUserOut()
      {
        sessionStorage.removeItem('authorizedUser');
      }
    

}
