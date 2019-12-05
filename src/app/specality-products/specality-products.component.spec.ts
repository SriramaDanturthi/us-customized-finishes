import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecalityProductsComponent } from './specality-products.component';

describe('SpecalityProductsComponent', () => {
  let component: SpecalityProductsComponent;
  let fixture: ComponentFixture<SpecalityProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecalityProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecalityProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
