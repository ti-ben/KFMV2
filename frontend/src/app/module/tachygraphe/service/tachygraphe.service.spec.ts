import { TestBed } from '@angular/core/testing';

import { TachygrapheService } from './tachygraphe.service';

describe('TachygrapheService', () => {
  let service: TachygrapheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachygrapheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
