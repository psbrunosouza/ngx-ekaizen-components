import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEkaizenComponentsComponent } from './ngx-ekaizen-components.component';

describe('NgxEkaizenComponentsComponent', () => {
  let component: NgxEkaizenComponentsComponent;
  let fixture: ComponentFixture<NgxEkaizenComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEkaizenComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxEkaizenComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
