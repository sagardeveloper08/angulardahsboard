import { TestBed } from '@angular/core/testing';

import { ExemService } from './exem.service';

describe('ExemService', () => {
  let service: ExemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
