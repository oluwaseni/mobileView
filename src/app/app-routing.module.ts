import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Module/home/home.component';
import { ContactComponent } from './Module/home/contact/contact.component';
import { ContactUsComponent } from './Module/home/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'contact-us', component: ContactUsComponent, }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
