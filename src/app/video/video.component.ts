import { Component, OnInit, Input } from '@angular/core';
import { SlideModel } from '../block-slideshow/slide-model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() slide: SlideModel;
  constructor() { }

  ngOnInit() {
  }

}
