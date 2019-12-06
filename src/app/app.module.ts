import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopbarComponent } from './header-topbar/header-topbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { BlockSlideshowComponent } from './block-slideshow/block-slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { FooterContactsComponent } from './footer-contacts/footer-contacts.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterNewsletterComponent } from './footer-newsletter/footer-newsletter.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { IconComponent } from './icon/icon.component';
import { HeaderDropcartComponent } from './header-dropcart/header-dropcart.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CabinetDoorsComponent } from './cabinet-doors/cabinet-doors.component';
import { DrawerFrontsComponent } from './drawer-fronts/drawer-fronts.component';
import { MoldingsComponent } from './moldings/moldings.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SpecalityProductsComponent } from './specality-products/specality-products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoadingBarComponent,
        QuickviewComponent,
        HeaderComponent,
        HeaderTopbarComponent,
        PageHomeComponent,
        BlockSlideshowComponent,
        FooterComponent,
        FooterContactsComponent,
        FooterLinksComponent,
        FooterNewsletterComponent,
        HeaderNavComponent,
        HeaderLinksComponent,
        IconComponent,
        HeaderDropcartComponent,
        HeaderMenuComponent,
        CabinetDoorsComponent,
        DrawerFrontsComponent,
        MoldingsComponent,
        AccessoriesComponent,
        SpecalityProductsComponent,
        ContactusComponent,
        HomeComponent,
        ProductsComponent,
        TestimonialsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        CarouselModule,
        YoutubePlayerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
