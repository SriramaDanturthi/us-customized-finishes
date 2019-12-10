import { Component, OnInit, Input } from '@angular/core';
import { LinkModel } from '../link-model';
import { LinkItemModel } from '../link-item-model';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {
  links: LinkModel[] = [
    new LinkModel('Information', [
      new LinkItemModel('Company Profile', '/companyprofile'),
      new LinkItemModel('How to Order', '/howtoorder'),
      new LinkItemModel('Gallery & Videos', '/galleryandvideos'),
      new LinkItemModel('Finishes', '/finishes'),
      new LinkItemModel('FAQ', '/faq'),
      new LinkItemModel('Warranty', '/warranty')
    ]),
    new LinkModel('My Account', [])
  ]
  @Input() header: string
  constructor() { }

  ngOnInit() {
  }
  get getLinks() {
    return this.links.find(x => x.header == this.header).links;
  }
}
