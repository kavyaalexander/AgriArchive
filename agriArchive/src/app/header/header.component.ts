import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
  identifyUserRole()
  {
    let token=localStorage.getItem('token');
    
    if(!!token)
    {
      let decodedToken = jwt_decode(token,{header:true});
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


