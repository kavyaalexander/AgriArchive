import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-editfoodcrops',
  templateUrl: './editfoodcrops.component.html',
  styleUrls: ['./editfoodcrops.component.css']
})
export class EditfoodcropsComponent implements OnInit {
  foodcrops=<any>[];

  imageWidth:number=50;
  imageMargin:number=2;
 
   constructor(private editfoodcropsService:CropsService,private router:Router) { }
 
   ngOnInit(): void {
    this.editfoodcropsService.getfoodCrops()
    .subscribe((data)=>{
      this.foodcrops=JSON.parse(JSON.stringify(data))
      console.log(this.foodcrops);
    });
  }
  deleteProduct(id)
  {
    console.log("delete call"+id);
     
    this.editfoodcropsService.deleteProduct(id);
    
    console.log("Deleted!");
    alert("Successfully Deleted!");
    this.router.navigate(['/foodcrops']);
  }

  editProduct(id){
  
    this.editfoodcropsService.updateProduct(id);
  }
}
