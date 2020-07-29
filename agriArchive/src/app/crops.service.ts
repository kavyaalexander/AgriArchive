import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CropsService {

  
  private foodcropsUrl="http://localhost:4000/api/foodcrops";
  private cashcropsUrl="http://localhost:4000/api/cashcrops";
  private hoticulturecropsUrl="http://localhost:4000/api/hoticulturecrops";
  private plantationcropsUrl="http://localhost:4000/api/plantcrops";
  private newFoodcropsUrl="http://localhost:4000/insert";
  private deletefoodUrl="http://localhost:4000/deleteProduct";
  private updatefoodUrl="http://localhost:4000/updateproduct";
  private shopUrl="http://localhost:4000/api/shop";
 

  constructor(private http: HttpClient) { }

 

  getfoodCrops(){
      return this.http.get<any>(this.foodcropsUrl)
      }
      getcashCrops(){
        return this.http.get<any>(this.cashcropsUrl)
        }
        gethoticultureCrops(){
          return this.http.get<any>(this.hoticulturecropsUrl)
          }
          getplantationCrops(){
            return this.http.get<any>(this.plantationcropsUrl)
            }
            getProduct(id){
              console.log("serv"+id)
              return this.http.post("http://localhost:4000/product",{"id":id})
              
            }
            
            getShop(){
              return this.http.get(this.shopUrl)
              }

            deleteProduct(id){
              console.log(id);
              return this.http.post(this.deletefoodUrl,{"id":id}).subscribe((status)=>
              {console.log(status); 
            });
          }
            updateProduct(item){
              console.log(item);
              return this.http.post(this.updatefoodUrl,{"product":item}).subscribe((status)=>
              {console.log("Crops Updated"); 
            });
            }


      addFoodcrops(item)
      {
        console.log("service")
        console.log(item);
        return this.http.post<any>(this.newFoodcropsUrl,{"crop":item})
        .subscribe((data)=>
                        {
                        console.log(data);
                        })
      }

}

