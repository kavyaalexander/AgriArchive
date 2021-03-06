import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { UserModel } from '../signup/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title:String="Sign Up";
  constructor(private signupService:AuthService,private router: Router) { }
  userDatas=new UserModel(null,null,null,null,null,null,null,null,null,null);

  
  ngOnInit(): void {
  }
  Register(){
    
    if(document.getElementById('radioNormal')['checked'])  
    {
    this.userDatas.type='normal';
    }
   else
    {
    this.userDatas.type='admin';
    }

  this.signupService.newUser(this.userDatas)
  .subscribe(
    (res:any)=>{    
      console.log(res)
      localStorage.setItem('token',res.token);
      this.router.navigate(['/login']);
    },
    err =>console.log(err)
  )
}
  
}

