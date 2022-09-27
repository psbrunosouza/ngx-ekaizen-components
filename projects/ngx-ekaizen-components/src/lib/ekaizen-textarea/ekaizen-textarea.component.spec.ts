import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkaizenTextareaComponent } from './ekaizen-textarea.component';

describe('EkaizenTextareaComponent', () => {
  let component: EkaizenTextareaComponent;
  let fixture: ComponentFixture<EkaizenTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkaizenTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkaizenTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
