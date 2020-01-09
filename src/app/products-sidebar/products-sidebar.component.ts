import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-sidebar',
  templateUrl: './products-sidebar.component.html',
  styleUrls: ['./products-sidebar.component.scss']
})
export class ProductsSidebarComponent implements OnInit {

  @Input() data: any[];
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
