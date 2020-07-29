import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CropsComponent } from './crops/crops.component';
import { ShopComponent } from './shop/shop.component';
import { CropsService } from './crops.service';
import { FoodcropsComponent } from './foodcrops/foodcrops.component';
import { CashcropsComponent } from './cashcrops/cashcrops.component';
import { HoticulturecropsComponent } from './hoticulturecrops/hoticulturecrops.component';
import { PlantationcropsComponent } from './plantationcrops/plantationcrops.component';
import { AddfoodcropsComponent } from './addfoodcrops/addfoodcrops.component';
import { UpdatedeletecropComponent } from './updatedeletecrop/updatedeletecrop.component';
import { EditfoodcropsComponent } from './editfoodcrops/editfoodcrops.component';
import { EditcashcropsComponent } from './editcashcrops/editcashcrops.component';
import { EdithoticulturecropsComponent } from './edithoticulturecrops/edithoticulturecrops.component';
import { EditplantationcropsComponent } from './editplantationcrops/editplantationcrops.component';
import { UpdatecropsComponent } from './updatecrops/updatecrops.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    CropsComponent,
    ShopComponent,
    FoodcropsComponent,
    CashcropsComponent,
    HoticulturecropsComponent,
    PlantationcropsComponent,
    AddfoodcropsComponent,
    UpdatedeletecropComponent,
    EditfoodcropsComponent,
    EditcashcropsComponent,
    EdithoticulturecropsComponent,
    EditplantationcropsComponent,
    UpdatecropsComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CropsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
