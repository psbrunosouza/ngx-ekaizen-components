import { TestBed } from '@angular/core/testing';

import { NgxEkaizenComponentsService } from './ngx-ekaizen-components.service';

describe('NgxEkaizenComponentsService', () => {
  let service: NgxEkaizenComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEkaizenComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
