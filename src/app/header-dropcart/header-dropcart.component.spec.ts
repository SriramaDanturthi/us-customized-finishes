import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDropcartComponent } from './header-dropcart.component';

describe('HeaderDropcartComponent', () => {
  let component: HeaderDropcartComponent;
  let fixture: ComponentFixture<HeaderDropcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDropcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDropcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
