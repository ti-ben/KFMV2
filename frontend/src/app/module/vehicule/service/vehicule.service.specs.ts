import { TestBed } from '@angular/core/testing';

import { VehiculeService } from './vehicule.service';

describe('UserService', () => {
  let service: VehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
