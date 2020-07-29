import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ContactModel } from '../contactus/contact.model';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  title:String="Contact Us";
  constructor(private router: Router) { }
  contactDatas=new ContactModel(null,null,null);

  ngOnInit(): void {
  }
  Send(){
    console.log("send!");
  alert("Sucessfully send query, and reply send to your email id");
  }
}
