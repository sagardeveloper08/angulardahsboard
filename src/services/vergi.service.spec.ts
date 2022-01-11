import { TestBed } from '@angular/core/testing';

import { VergiService } from './vergi.service';

describe('VergiService', () => {
  let service: VergiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VergiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
