import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlideModel } from '../block-slideshow/slide-model';

@Component({
  selector: 'app-block-products-carousel',
  templateUrl: './block-products-carousel.component.html',
  styleUrls: ['./block-products-carousel.component.scss']
})
export class BlockProductsCarouselComponent implements OnInit {

  slideShowOptions: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slidesStore: SlideModel[] = [
    new SlideModel('1', 'assets/images/home/cabinet-doors.jpg', 'Cabinet Doors', '/cabinetdoors'),
    new SlideModel('2', 'assets/images/home/drawer-fronts.jpg', 'Drawer Fronts', '/drawerfronts'),
    new SlideModel('3', 'assets/images/home/moldings.jpg', 'Moldings', '/moldings'),
    new SlideModel('4', 'assets/images/home/hardware.jpg', 'Accessories', '/accessories')
  ]
  //
  ///themes/red-ltr/classic/shop/product/1
  //Cabinet Doors
  constructor() {
  }

  ngOnInit() {
  }

  player: YT.Player;
  private id: string = 'UmltsrGU4tE';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
