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
            new LinkItemModel('About Us', '/aboutus'),
            new LinkItemModel('Delivery Information', '/delivery'),
            new LinkItemModel('Privacy Policy', '/privacypolicy')
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
