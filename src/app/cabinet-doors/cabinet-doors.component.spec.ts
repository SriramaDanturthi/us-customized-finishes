import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetDoorsComponent } from './cabinet-doors.component';

describe('CabinetDoorsComponent', () => {
  let component: CabinetDoorsComponent;
  let fixture: ComponentFixture<CabinetDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetDoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
