import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';
import {Router} from '@angular/router';
import {FoodcropsModel} from '../foodcrops/foodcrops.model';


@Component({
  selector: 'app-addfoodcrops',
  templateUrl: './addfoodcrops.component.html',
  styleUrls: ['./addfoodcrops.component.css']
})
export class AddfoodcropsComponent implements OnInit {

  constructor(private addfoodcropsService:CropsService,private router:Router) { }
  newItem=new FoodcropsModel(null,null,null,null,null,null);
  

  ngOnInit(): void {
  }
  AddCrops()
  {
    console.log("Adding New Crops");
      if(document.getElementById('radioNormal')['checked'])   //checking user-type selected
      {
      this.newItem.type='foodcrops';
      }
     else if(document.getElementById('cashCrops')['checked'])
      {
      this.newItem.type='cashcrops';
      }
      else if(document.getElementById('hoticulturecrops')['checked'])
      {
      this.newItem.type='hoticulturecrops';
      }
      else{
        this.newItem.type='plantationCrops';
      }
     

      

    console.log("Adding New Product");
  this.addfoodcropsService.addFoodcrops(this.newItem);
  console.log("Product added!");
  alert("Sucessfully added!");
  

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
