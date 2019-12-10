import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetDoorsAndDrawerFrontsComponent } from './cabinet-doors-and-drawer-fronts.component';

describe('CabinetDoorsAndDrawerFrontsComponent', () => {
  let component: CabinetDoorsAndDrawerFrontsComponent;
  let fixture: ComponentFixture<CabinetDoorsAndDrawerFrontsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetDoorsAndDrawerFrontsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetDoorsAndDrawerFrontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
