import { Component, OnInit, Input } from '@angular/core';
import { IconModel } from '../icon-model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string;
  @Input() size: string;

  link: string;
  width: string;
  height: string;
  private index: number;
  constructor() { }

  ngOnInit() {
    this.index = this.size.indexOf("x");
    if (this.index < 0) {
      this.width = this.height = this.size + "px";
    }
    else {
      this.width = this.size.substring(0, this.index) + "px";
      this.height = this.size.substring(this.index + 1, this.size.length + 1 - this.index) + "px";
    }
    this.link = "assets/images/sprite.svg#" + this.name;

  }

}
