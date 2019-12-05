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
        new SlideModel('1', 'assets/images/slides/slide-1-full.jpg', 'Image', 'Image')
    ]

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
