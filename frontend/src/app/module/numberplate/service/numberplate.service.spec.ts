import { TestBed } from '@angular/core/testing';

import { NumberplateService } from './numberplate.service';

describe('NumberplateService', () => {
  let service: NumberplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
