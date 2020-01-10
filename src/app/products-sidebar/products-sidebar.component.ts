import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-sidebar',
  templateUrl: './products-sidebar.component.html',
  styleUrls: ['./products-sidebar.component.scss']
})
export class ProductsSidebarComponent implements OnInit, OnDestroy {

  @Input() data: any[];
  private routeSub: any;
  title: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.title = params['title'];
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
