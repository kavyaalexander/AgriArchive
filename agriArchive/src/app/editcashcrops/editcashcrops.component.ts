import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-editcashcrops',
  templateUrl: './editcashcrops.component.html',
  styleUrls: ['./editcashcrops.component.css']
})
export class EditcashcropsComponent implements OnInit {
  cashcrops=<any>[];
  imageWidth:number=50;
  imageMargin:number=2;

  constructor(private editcashcropsService:CropsService,private router:Router) { }

  ngOnInit(): void {
    this.editcashcropsService.getcashCrops()
    .subscribe((data)=>{
      this.cashcrops=JSON.parse(JSON.stringify(data))
      console.log(this.cashcrops);
    });
  }
  deleteProduct(id)
  {
    console.log("delete call"+id);
     
    this.editcashcropsService.deleteProduct(id);
    
    console.log("Deleted!");
    alert("Successfully Deleted!");
    this.router.navigate(['/cashcrops']);
  }

  editProduct(id){
  
    this.editcashcropsService.updateProduct(id);
    
  }
}
