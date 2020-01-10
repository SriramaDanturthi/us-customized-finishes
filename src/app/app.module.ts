import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';


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
import { ProductCardComponent } from './product-card/product-card.component';
import { BlockProductsCarouselComponent } from './block-products-carousel/block-products-carousel.component';
import { BlockHeaderComponent } from './block-header/block-header.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { GalleryAndVideosComponent } from './gallery-and-videos/gallery-and-videos.component';
import { FinishesComponent } from './finishes/finishes.component';
import { FaqComponent } from './faq/faq.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { CabinetDoorsAndDrawerFrontsComponent } from './cabinet-doors-and-drawer-fronts/cabinet-doors-and-drawer-fronts.component';
import { BlockMapComponent } from './block-map/block-map.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { VideoComponent } from './video/video.component';
import { MediaComponent } from './media/media.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductsSidebarComponent } from './products-sidebar/products-sidebar.component';
import { WidgetFiltersComponent } from './widget-filters/widget-filters.component';
import { WidgetProductsComponent } from './widget-products/widget-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageHeaderService } from './page-header/page-header.service';

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
    TestimonialsComponent,
    ProductCardComponent,
    BlockProductsCarouselComponent,
    BlockHeaderComponent,
    CompanyProfileComponent,
    HowToOrderComponent,
    GalleryAndVideosComponent,
    FinishesComponent,
    FaqComponent,
    WarrantyComponent,
    CabinetDoorsAndDrawerFrontsComponent,
    BlockMapComponent,
    PageHeaderComponent,
    VideoComponent,
    MediaComponent,
    ProductsViewComponent,
    PaginationComponent,
    ProductsSidebarComponent,
    WidgetFiltersComponent,
    WidgetProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    YouTubePlayerModule, 
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [PageHeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
