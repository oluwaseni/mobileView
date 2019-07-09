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
import { AccountComponent } from './Module/home/account/account.component';
import { PageNotFoundComponent } from './Module/home/page-not-found/page-not-found.component';
import { AboutUsComponent } from './Module/about-us/about-us.component';
import { AccountDashboardComponent } from './Module/account-dashboard/account-dashboard.component';
import { ActivateAccountComponent } from './Module/activate-account/activate-account.component';
import { ActivatedComponent } from './Module/activated/activated.component';
import { ActivationComponentComponent } from './Module/activation-component/activation-component.component';
import { BankComponent } from './Module/bank/bank.component';
import { BuyerManagementComponent } from './Module/buyer-management/buyer-management.component';
import { BuyerRegistrationComponent } from './Module/buyer-registration/buyer-registration.component';
import { CheckoutComponent } from './Module/checkout/checkout.component';
import { CreditComponent } from './Module/credit/credit.component';
import { DashboardComponent } from './Module/dashboard/dashboard.component';
import { FaqComponent } from './Module/faq/faq.component';
import { ForgotPasswordComponent } from './Module/forgot-password/forgot-password.component';
import { GetQuotesComponent } from './Module/get-quotes/get-quotes.component';
import { GoodsComponent } from './Module/goods/goods.component';
import { GoodsCategoryComponent } from './Module/goods-category/goods-category.component';
import { LoginComponent } from './Module/login/login.component';
import { LogsComponent } from './Module/logs/logs.component';
import { MakeOrderComponent } from './Module/make-order/make-order.component';
import { MessageTemplatesComponent } from './Module/message-templates/message-templates.component';
import { MessagesComponent } from './Module/messages/messages.component';
import { NotificationsComponent } from './Module/notifications/notifications.component';
import { OfflineComponent } from './Module/offline/offline.component';
import { OrdersComponent } from './Module/orders/orders.component';
import { PasswordResetComponent } from './Module/password-reset/password-reset.component';
import { PrivacyPolicyComponent } from './Module/privacy-policy/privacy-policy.component';
import { ProfileComponent } from './Module/profile/profile.component';
import { PublicCategoriesComponent } from './Module/public-categories/public-categories.component';
import { PublicFaqComponent } from './Module/public-faq/public-faq.component';
import { PublicProductsComponent } from './Module/public-products/public-products.component';
import { PublicReviewComponent } from './Module/public-review/public-review.component';
import { PublicSuppliersComponent } from './Module/public-suppliers/public-suppliers.component';
import { QuotesComponent } from './Module/quotes/quotes.component';
import { RequestedQuotesComponent } from './Module/requested-quotes/requested-quotes.component';
import { ResetPasswordComponent } from './Module/reset-password/reset-password.component';
import { RolesComponent } from './Module/roles/roles.component';
import { SearchResultsComponent } from './Module/search-results/search-results.component';
import { SiteMapComponent } from './Module/site-map/site-map.component';
import { StaffManagementComponent } from './Module/staff-management/staff-management.component';
import { StaffRegistrationComponent } from './Module/staff-registration/staff-registration.component';
import { SubscribeComponent } from './Module/subscribe/subscribe.component';
import { SupplierDirectoryComponent } from './Module/supplier-directory/supplier-directory.component';
import { SupplierManagementComponent } from './Module/supplier-management/supplier-management.component';
import { SupplierRegistrationComponent } from './Module/supplier-registration/supplier-registration.component';
import { TermsComponent } from './Module/terms/terms.component';
import { WarehouseComponent } from './Module/warehouse/warehouse.component';
import { AgricultureComponent } from './Module/home/categories/agriculture/agriculture.component';
import { ApparelComponent } from './Module/home/categories/apparel/apparel.component';
import { AutoComponent } from './Module/home/categories/auto/auto.component';
import { BagsComponent } from './Module/home/categories/bags/bags.component';
import { ElectronicsComponent } from './Module/home/categories/electronics/electronics.component';
import { GiftsComponent } from './Module/home/categories/gifts/gifts.component';
import { HealthComponent } from './Module/home/categories/health/health.component';
import { MachineryComponent } from './Module/home/categories/machinery/machinery.component';
import { MeasurementComponent } from './Module/home/categories/measurement/measurement.component';
import { MetallurgyComponent } from './Module/home/categories/metallurgy/metallurgy.component';
import { PackagingComponent } from './Module/home/categories/packaging/packaging.component';
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
    ContactUsComponent,
    AccountComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    AccountDashboardComponent,
    ActivateAccountComponent,
    ActivatedComponent,
    ActivationComponentComponent,
    BankComponent,
    BuyerManagementComponent,
    BuyerRegistrationComponent,
    CheckoutComponent,
    CreditComponent,
    DashboardComponent,
    FaqComponent,
    ForgotPasswordComponent,
    GetQuotesComponent,
    GoodsComponent,
    GoodsCategoryComponent,
    LoginComponent,
    LogsComponent,
    MakeOrderComponent,
    MessageTemplatesComponent,
    MessagesComponent,
    NotificationsComponent,
    OfflineComponent,
    OrdersComponent,
    PasswordResetComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    PublicCategoriesComponent,
    PublicFaqComponent,
    PublicProductsComponent,
    PublicReviewComponent,
    PublicSuppliersComponent,
    QuotesComponent,
    RequestedQuotesComponent,
    ResetPasswordComponent,
    RolesComponent,
    SearchResultsComponent,
    SiteMapComponent,
    StaffManagementComponent,
    StaffRegistrationComponent,
    SubscribeComponent,
    SupplierDirectoryComponent,
    SupplierManagementComponent,
    SupplierRegistrationComponent,
    TermsComponent,
    WarehouseComponent,
    AgricultureComponent,
    ApparelComponent,
    AutoComponent,
    BagsComponent,
    ElectronicsComponent,
    GiftsComponent,
    HealthComponent,
    MachineryComponent,
    MeasurementComponent,
    MetallurgyComponent,
    PackagingComponent
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
