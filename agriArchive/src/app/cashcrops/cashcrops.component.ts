import { CropsService } from '../crops.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cashcrops',
  templateUrl: './cashcrops.component.html',
  styleUrls: ['./cashcrops.component.css']
})
export class CashcropsComponent implements OnInit {
  cashcrops=<any>[];

  imageWidth:number=50;
  imageMargin:number=2;
 
   constructor(private cashcropsService:CropsService) { }
 
   ngOnInit(): void  {this.cashcropsService.getcashCrops()
     .subscribe((data)=>
     {
       this.cashcrops=JSON.parse(JSON.stringify(data));
       console.log(this.cashcrops);
     });
   }
 }