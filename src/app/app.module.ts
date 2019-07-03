import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Module/home/footer/footer.component';
import { SidebarComponent } from './Module/home/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLoaderComponent } from './Module/home/home-loader/home-loader.component';
import { CategoriesComponent } from './Module/home/categories/categories.component';
import { BannerComponent } from './Module/home/banner/banner.component';
import { HeaderComponent } from './Module/home/header/header.component';
import { TopProductsComponent } from './Module/home/top-products/top-products.component';
import { RecommendationsComponent } from './Module/home/recommendations/recommendations.component';
import { DealsComponent } from './Module/home/deals/deals.component';
import { HomeSliderComponent } from './Module/home/home-slider/home-slider.component';
import { HomeComponent } from './Module/home/home.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ContactComponent } from './Module/home/contact/contact.component';
import { ContactUsComponent } from './Module/home/contact-us/contact-us.component';
// import { FooterModule } from './Shared/footer/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // FooterModule,
    SidebarComponent,
    HomeLoaderComponent,
    CategoriesComponent,
    BannerComponent,
    HeaderComponent,
    TopProductsComponent,
    RecommendationsComponent,
    DealsComponent,
    HomeSliderComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
