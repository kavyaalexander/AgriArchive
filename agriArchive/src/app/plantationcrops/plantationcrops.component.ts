import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';


@Component({
  selector: 'app-plantationcrops',
  templateUrl: './plantationcrops.component.html',
  styleUrls: ['./plantationcrops.component.css']
})
export class PlantationcropsComponent implements OnInit {

  plantationcrops=<any>[];

  imageWidth:number=50;
  imageMargin:number=2;
 
   constructor(private plantationcropsService:CropsService) { }
 
   ngOnInit(): void  {this.plantationcropsService.getplantationCrops()
     .subscribe((data)=>
     {
       this.plantationcrops=JSON.parse(JSON.stringify(data));
       console.log(this.plantationcrops);
     });
   }
 }