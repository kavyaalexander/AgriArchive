import { Component, OnInit, OnDestroy } from '@angular/core';
import { CropsService } from '../crops.service';
import {FormsModule} from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router';
import {from,Subscription} from 'rxjs';
import { FoodcropsModel } from '../foodcrops/foodcrops.model';



@Component({
  selector: 'app-updatecrops',
  templateUrl: './updatecrops.component.html',
  styleUrls: ['./updatecrops.component.css']
})
export class UpdatecropsComponent implements OnInit, OnDestroy {

  newItem=new FoodcropsModel(null,null,null,null,null,null);
  id;
  sub;
    constructor(private cropsService:CropsService,private router:Router,private activatedRoute:ActivatedRoute) { }
 
   ngOnInit(): void {
     this.sub =  this.activatedRoute.paramMap.subscribe((params)=>
     {
 this.id = params.get('id'); 
 console.log("id"+this.id);
 
 this.cropsService.getProduct(this.id).subscribe((data:any)=>
 {
 this.newItem=data.product;
 console.log(this.newItem);
 });
 
 console.log(this.newItem);
     });
 }
 ngOnDestroy()
 {
 this.sub.unsubscribe();
 }
 UpdateCrop()
 {
 console.log(this.newItem);
 this.cropsService.updateProduct(this.newItem);
 console.log("one Product Updated!");
 alert("one Product Updated!");
//  this.router.navigate(['/foodcrops']);
 if(document.getElementById('radioNormal')['checked'])  
 {
   this.router.navigate(['/foodcrops']);
 
 }
else if(document.getElementById('cashCrops')['checked'])
 {
   this.router.navigate(['/cashcrops']);
 }
 else if(document.getElementById('hoticulturecrops')['checked'])
 {
   this.router.navigate(['/hoticrops']);
 }
 else{
   this.router.navigate(['/plantcrops']);
 }
 }
 }
 