import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestmonialModel } from './testmonial-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent implements OnInit {

  slideShowOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplay: true,
    autoHeight: false,
    items: 1
  }

  testmonials: TestmonialModel[];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getTestMonials();
  }

  getTestMonials() {
    return this.http.get("https://localhost:44335/api/testmonials")
      .subscribe(data=>{
        this.testmonials = data as TestmonialModel[];
        console.log(this.testmonials);
      });
  }
}
