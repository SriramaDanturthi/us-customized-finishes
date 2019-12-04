import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';


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
    FooterNewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
