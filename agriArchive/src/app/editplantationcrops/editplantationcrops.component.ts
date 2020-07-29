import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-editplantationcrops',
  templateUrl: './editplantationcrops.component.html',
  styleUrls: ['./editplantationcrops.component.css']
})
export class EditplantationcropsComponent implements OnInit {
  plantcrops=<any>[];
  imageWidth:number=50;
  imageMargin:number=2;

  constructor(private editplantcropsService:CropsService,private router:Router) { }

  ngOnInit(): void {
    this.editplantcropsService.getplantationCrops()
    .subscribe((data)=>{
      this.plantcrops=JSON.parse(JSON.stringify(data))
      console.log(this.plantcrops);
    });
  }
  deleteProduct(id)
  {
    console.log("delete call"+id);
     
    this.editplantcropsService.deleteProduct(id);
    
    console.log("Deleted!");
    alert("Successfully Deleted!");
    this.router.navigate(['/plantcrops']);
  }

  editProduct(id){
  
    this.editplantcropsService.updateProduct(id);
    
  }
}
