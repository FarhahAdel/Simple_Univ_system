import { TestBed } from '@angular/core/testing';

import { UnivServiceService } from './univ-service.service';

describe('UnivServiceService', () => {
  let service: UnivServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
