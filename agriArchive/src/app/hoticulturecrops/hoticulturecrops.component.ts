import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';


@Component({
  selector: 'app-hoticulturecrops',
  templateUrl: './hoticulturecrops.component.html',
  styleUrls: ['./hoticulturecrops.component.css']
})
export class HoticulturecropsComponent implements OnInit {

  hoticulturecrops=<any>[];

  imageWidth:number=50;
  imageMargin:number=2;
 
   constructor(private hoticulturecropsService:CropsService) { }
 
   ngOnInit(): void  {this.hoticulturecropsService.gethoticultureCrops()
     .subscribe((data)=>
     {
       this.hoticulturecrops=JSON.parse(JSON.stringify(data));
       console.log(this.hoticulturecrops);
     });
   }
 }
