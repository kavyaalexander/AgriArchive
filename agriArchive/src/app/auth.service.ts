import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router: Router) { }
  newUser(user){
    return this.http.post("http://localhost:4000/signup",{"user":user})
  // .subscribe(data=>{console.log(data)})
  }
  
  newLogin(login){
    return this.http.post("http://localhost:4000/login",{"user":login})
  
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
  identifyUserRole()
  {
    let token=localStorage.getItem('token');
  
    if(!!token)
    {
      let decodedToken = jwt_decode(token);
      let userType=decodedToken['type'];
      console.log(decodedToken);
      console.log(decodedToken['subject']);
      if(userType=='admin')
      {
        console.log("FULL ACCESS GRANTED!")
        return true;
      }
      else
      {
        console.log("FULL ACCESS GRANTED!")
        return false;
      } 
    }
    else
    {
      return false;
    }
  
  }
}
