import { TestBed } from '@angular/core/testing';

import { KlantenService } from './klanten.service';

describe('KlantenService', () => {
  let service: KlantenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlantenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
