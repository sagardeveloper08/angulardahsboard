import { TestBed } from '@angular/core/testing';

import { AyarlarService } from './ayarlar.service';

describe('AyarlarService', () => {
  let service: AyarlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyarlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
