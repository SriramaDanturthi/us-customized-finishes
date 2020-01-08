import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlideModel } from './slide-model';


@Component({
  selector: 'app-block-slideshow',
  templateUrl: './block-slideshow.component.html',
  styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent implements OnInit {
  slideShowOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    autoplay: true,
    autoHeight: false,
    items: 1
  }

  slidesStore: SlideModel[];

  constructor() {
    this.slidesStore = 
    [
      new SlideModel('1', 'assets/images/videos/faces.mp4', 'Image', 'Image', 'Doors and Drawer Fronts','Manufacturing Custom Cabinet Doors and others for 27 years and Counting ....'),
      new SlideModel('2', 'assets/images/videos/hardware.mp4', 'Image', 'Image', 'Moldings and Trims', 'Precise, On time, Quality and Service for 27 years and Counting ...'),
      new SlideModel('3', 'assets/images/videos/molding.mp4', 'Image', 'Image', 'Finishes', 'Helping Customers with Innovate and Creative Solutions.'),
      new SlideModel('4', 'assets/images/videos/vinylcolors.mp4', 'Image', 'Image', 'Accessories and Hardware', 'We are your Factory Direct Partner.'),
    ];
  }

  ngOnInit() {
  }


  savePlayer(player) {
    //player.target.playVideo();
    //player.target.hideVideoInfo();
   // console.log(player);
  }
  onStateChange(event) {
   console.log('player state', event);
  }
}
