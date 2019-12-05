import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerFrontsComponent } from './drawer-fronts.component';

describe('DrawerFrontsComponent', () => {
  let component: DrawerFrontsComponent;
  let fixture: ComponentFixture<DrawerFrontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerFrontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerFrontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
