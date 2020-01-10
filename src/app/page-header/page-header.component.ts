import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map, mergeMap } from 'rxjs/internal/operators';
import { PageHeaderService } from './page-header.service';

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"]
})
export class PageHeaderComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadcrumbs: Array<any> = [];

  constructor(private _router: Router, private menuService: PageHeaderService) { }


  ngOnInit() {
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }
  listenRouting() {
    let routerUrl: string, routerList: Array<any>, target: any;
    this._router.events.subscribe((router: any) => {
      routerUrl = router.urlAfterRedirects;
      if (routerUrl && typeof routerUrl === 'string') {
        target = this.menu;
        this.breadcrumbs.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          target = target.find(page => page.path.slice(2) === router);
          this.breadcrumbs.push({
            label: target.title,
            url: (index === 0) ? target.path : `${this.breadcrumbs[index - 1].url}/${target.path.slice(2)}`,
            params: { title: target.title }
          });

          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });

        console.log(this.breadcrumbs);
      }
    });
  }
}
