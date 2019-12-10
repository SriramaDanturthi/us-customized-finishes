import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAndVideosComponent } from './gallery-and-videos.component';

describe('GalleryAndVideosComponent', () => {
  let component: GalleryAndVideosComponent;
  let fixture: ComponentFixture<GalleryAndVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAndVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAndVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
