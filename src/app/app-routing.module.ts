import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { GalleryAndVideosComponent } from './gallery-and-videos/gallery-and-videos.component';
import { FinishesComponent } from './finishes/finishes.component';
import { FaqComponent } from './faq/faq.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { CabinetDoorsComponent } from './cabinet-doors/cabinet-doors.component';
import { CabinetDoorsAndDrawerFrontsComponent } from './cabinet-doors-and-drawer-fronts/cabinet-doors-and-drawer-fronts.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DrawerFrontsComponent } from './drawer-fronts/drawer-fronts.component';
import { MoldingsComponent } from './moldings/moldings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'companyprofile', component: CompanyProfileComponent },
  { path: 'howtoorder', component: HowToOrderComponent },
  { path: 'galleryandvideos', component: GalleryAndVideosComponent },
  { path: 'finishes', component: FinishesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'warranty', component: WarrantyComponent },
  { path: 'cabinetdoors', component: CabinetDoorsComponent },
  { path: 'cabinetdoorsanddrawerfronts', component: CabinetDoorsAndDrawerFrontsComponent },
  { path: 'moldings', component: MoldingsComponent },
  { path: 'drawerfronts', component: DrawerFrontsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
