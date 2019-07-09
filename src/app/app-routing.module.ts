import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Module/home/home.component';
import { ContactComponent } from './Module/home/contact/contact.component';
import { ContactUsComponent } from './Module/home/contact-us/contact-us.component';
import { AccountComponent } from './Module/home/account/account.component';
import { PageNotFoundComponent } from './Module/home/page-not-found/page-not-found.component';
import { AgricultureComponent } from './Module/home/categories/agriculture/agriculture.component';
import { CategoriesComponent } from './Module/home/categories/categories.component';
import { ApparelComponent } from './Module/home/categories/apparel/apparel.component';
import { AutoComponent } from './Module/home/categories/auto/auto.component';
import { BagsComponent } from './Module/home/categories/bags/bags.component';
import { ElectronicsComponent } from './Module/home/categories/electronics/electronics.component';
import { GiftsComponent } from './Module/home/categories/gifts/gifts.component';
import { HealthComponent } from './Module/home/categories/health/health.component';
import { MachineryComponent } from './Module/home/categories/machinery/machinery.component';
import { MeasurementComponent } from './Module/home/categories/measurement/measurement.component';
import { MetallurgyComponent } from './Module/home/categories/metallurgy/metallurgy.component';
// import { HomeComponent } from './Module/home/categories/home/home.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', pathMatch: 'full', component: HomeComponent,},
  { path: 'contact', pathMatch: 'full', component: ContactComponent, },
  { path: 'account', pathMatch: 'full', component: AccountComponent, },
  { path: 'contact-us', pathMatch: 'full', component: ContactUsComponent},  //children: [
    // {path: 'contact', pathMatch: 'full', component: ContactComponent}

//]  },
  {path: 'agriculture', component: AgricultureComponent},
  {path: 'apparel', component: ApparelComponent},
  {path: 'auto', component: AutoComponent},
  {path: 'bags', component: BagsComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'gifts', component: GiftsComponent},
  {path: 'health', component: HealthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'machinery', component: MachineryComponent},
  {path: 'measurement', component: MeasurementComponent},
  {path: 'measurement', component: MeasurementComponent},
  {path: 'packaging', component: MetallurgyComponent},
  {path: 'agriculture', component: AgricultureComponent},
  {path: 'categories', component: CategoriesComponent, },
  {path:'**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
