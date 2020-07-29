import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';

@Component({
  selector: 'app-foodcrops',
  templateUrl: './foodcrops.component.html',
  styleUrls: ['./foodcrops.component.css']
})
export class FoodcropsComponent implements OnInit {
 foodcrops=<any>[];

 imageWidth:number=80;
 imageMargin:number=2;
 imageHeight:number=50;

  constructor(private foodcropsService:CropsService) { }

  ngOnInit(): void  {this.foodcropsService.getfoodCrops()
    .subscribe((data)=>
    {
      this.foodcrops=JSON.parse(JSON.stringify(data));
      console.log(this.foodcrops);
    });
  }
}
