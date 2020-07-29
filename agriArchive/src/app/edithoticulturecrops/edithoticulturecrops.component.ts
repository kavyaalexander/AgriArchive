import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-edithoticulturecrops',
  templateUrl: './edithoticulturecrops.component.html',
  styleUrls: ['./edithoticulturecrops.component.css']
})
export class EdithoticulturecropsComponent implements OnInit {
  horticrops=<any>[];
  imageWidth:number=50;
  imageMargin:number=2;
  constructor(private edithorticropsService:CropsService,private router:Router) { }

  ngOnInit(): void {
    this.edithorticropsService.gethoticultureCrops()
    .subscribe((data)=>{
      this.horticrops=JSON.parse(JSON.stringify(data))
      console.log(this.horticrops);
    });
  }
  deleteProduct(id)
  {
    console.log("delete call"+id);
     
    this.edithorticropsService.deleteProduct(id);
    
    console.log("Deleted!");
    alert("Successfully Deleted!");
    this.router.navigate(['/hoticrops']);
  }

  editProduct(id){
  
    this.edithorticropsService.updateProduct(id);
    
  }
}
