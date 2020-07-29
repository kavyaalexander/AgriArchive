import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { LoginModel } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Login";
  constructor(private loginService:AuthService,private router: Router) { }
  loginDatas=new LoginModel(null,null);


  ngOnInit(): void {
  }
  Login(){
    this.loginService.newLogin(this.loginDatas)
    .subscribe(
      (res:any)=>{            
     if(res.token)
{
  console.log(res)
   localStorage.setItem('token',res.token);
          this.router.navigate(['/']);
          // console.log(status="false")
          alert("Successfully Login");
          
}
else
{
   alert("Invalid Credentials!")
  console.log(res)
}
 })
  
}
  }

