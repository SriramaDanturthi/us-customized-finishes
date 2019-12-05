import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldingsComponent } from './moldings.component';

describe('MoldingsComponent', () => {
  let component: MoldingsComponent;
  let fixture: ComponentFixture<MoldingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoldingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
