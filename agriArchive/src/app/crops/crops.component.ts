import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';


@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

  // crops=<any>[]

  constructor(private cropsService: CropsService) { }

  ngOnInit()  {
  //   this.cropsService.getCrops()
  //   .subscribe(
  //     res =>this.crops=res,
  //     err=>console.log(err)
  //   )

  }

}
