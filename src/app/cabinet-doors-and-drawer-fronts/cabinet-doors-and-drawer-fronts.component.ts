import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from '../page-header/page-header.service';

@Component({
  selector: 'app-cabinet-doors-and-drawer-fronts',
  templateUrl: './cabinet-doors-and-drawer-fronts.component.html',
  styleUrls: ['./cabinet-doors-and-drawer-fronts.component.scss']
})
export class CabinetDoorsAndDrawerFrontsComponent implements OnInit {
  jsonData;
  constructor(private menuService: PageHeaderService) { }

  ngOnInit() {
    this.jsonData = this.menuService.getMenu();
  }
}
