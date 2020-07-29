import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CropsComponent } from './crops/crops.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';5
import { FoodcropsComponent } from './foodcrops/foodcrops.component';
import { CashcropsComponent } from './cashcrops/cashcrops.component';
import { HoticulturecropsComponent } from './hoticulturecrops/hoticulturecrops.component';
import { PlantationcropsComponent } from './plantationcrops/plantationcrops.component';
import { AddfoodcropsComponent } from './addfoodcrops/addfoodcrops.component';
import { UpdatedeletecropComponent } from './updatedeletecrop/updatedeletecrop.component';
import { UpdatecropsComponent } from './updatecrops/updatecrops.component';
import { EditfoodcropsComponent } from './editfoodcrops/editfoodcrops.component';
import { EditcashcropsComponent } from './editcashcrops/editcashcrops.component';
import { EdithoticulturecropsComponent } from './edithoticulturecrops/edithoticulturecrops.component';
import { EditplantationcropsComponent } from './editplantationcrops/editplantationcrops.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component: HomeComponent},
{path:'crops',component: CropsComponent},
{path:'shop',component: ShopComponent,canActivate:[AuthGuard]},
{path:'foodcrops',component: FoodcropsComponent},
{path:'cashcrops',component: CashcropsComponent },
{path:'hoticrops',component: HoticulturecropsComponent},
{path:'plantcrops',component: PlantationcropsComponent},
{path:'editcrops',component: UpdatedeletecropComponent,canActivate:[AuthGuard]},
{path:'editfoodcrops',component: EditfoodcropsComponent},
{path:'editcashcrops',component: EditcashcropsComponent },
{path:'edithoticrops',component: EdithoticulturecropsComponent},
{path:'editplantcrops',component: EditplantationcropsComponent},
{path:'addfoodcrops',component: AddfoodcropsComponent,canActivate:[AuthGuard]},
{path:'updatecrops/:id',component: UpdatecropsComponent},
{path:'signup',component: SignupComponent},
{path:'login',component: LoginComponent},
{path:'contact',component: ContactusComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
