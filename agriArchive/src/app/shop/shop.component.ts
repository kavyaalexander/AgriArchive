import { Component, OnInit } from '@angular/core';
import { CropsService } from '../crops.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
shops=<any>[]
  constructor(private shopService: CropsService) { }

  ngOnInit(): void {
    this.shopService.getShop()
    .subscribe(
      res =>this.shops=res,
      err=>console.log(err)
    )

}
Buy(){
console.log("Product added!");
  alert("Sucessfully buyed this product, will be delivered soon...");
}
}
