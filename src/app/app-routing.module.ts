import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { HowToOrderComponent } from "./how-to-order/how-to-order.component";
import { GalleryAndVideosComponent } from "./gallery-and-videos/gallery-and-videos.component";
import { FinishesComponent } from "./finishes/finishes.component";
import { FaqComponent } from "./faq/faq.component";
import { WarrantyComponent } from "./warranty/warranty.component";
import { CabinetDoorsComponent } from "./cabinet-doors/cabinet-doors.component";
import { CabinetDoorsAndDrawerFrontsComponent } from "./cabinet-doors-and-drawer-fronts/cabinet-doors-and-drawer-fronts.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { DrawerFrontsComponent } from "./drawer-fronts/drawer-fronts.component";
import { MoldingsComponent } from "./moldings/moldings.component";
import { ContactusComponent } from "./contactus/contactus.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "contactus",
    component: ContactusComponent,
    data: { breadcrumb: "Contact Us" }
  },
  {
    path: "companyprofile",
    component: CompanyProfileComponent,
    data: { breadcrumb: "Company Profile" }
  },
  {
    path: "howtoorder",
    component: HowToOrderComponent,
    data: { breadcrumb: "How To Order" }
  },
  {
    path: "galleryandvideos",
    component: GalleryAndVideosComponent,
    data: { breadcrumb: "Gallery And Videos" }
  },
  {
    path: "finishes",
    component: FinishesComponent,
    data: { breadcrumb: "Finishes" }
  },
  { path: "faq", component: FaqComponent, data: { breadcrumb: "FAQ" } },
  {
    path: "warranty",
    component: WarrantyComponent,
    data: { breadcrumb: "Warranty" }
  },
  {
    path: "cabinetdoors",
    component: CabinetDoorsComponent,
    data: { breadcrumb: "Cabinet Doors" }
  },
  {
    path: "cabinetdoorsanddrawerfronts",
    component: CabinetDoorsAndDrawerFrontsComponent,
    data: { breadcrumb: "Cabinet Doors And Drawer Fronts" }
  },
  {
    path: "moldings",
    component: MoldingsComponent,
    data: { breadcrumb: "Moldings" }
  },
  {
    path: "drawerfronts",
    component: DrawerFrontsComponent,
    data: { breadcrumb: "Drawer Fronts" }
  },
  {
    path: "accessories",
    component: AccessoriesComponent,
    data: { breadcrumb: "Accessories" }
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
