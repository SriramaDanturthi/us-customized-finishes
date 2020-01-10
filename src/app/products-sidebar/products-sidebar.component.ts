import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

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
      if (this.title) {
        this.data = this.findValuesHelper(this.data, this.title);
      }
      console.log(this.data);
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  findValuesHelper(obj: any, key: any) {
    let list = [];
    if (!obj) return list;
    if (obj instanceof Array) {
      for (var i in obj) {
        list = list.concat(this.findValuesHelper(obj[i], key));
      }
      return list;
    }
    if (obj.title == key) {
      console.log(obj);
      list.push(obj);
    }

    if ((typeof obj == "object") && (obj !== null)) {
      if (obj.children && obj.children.length > 0) {
        for (let i = 0; i < obj.children.length; i++) {
          list = list.concat(this.findValuesHelper(obj.children[i], key));
        }
      }
    }
    return list;
  }
}
