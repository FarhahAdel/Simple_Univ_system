import { TestBed } from '@angular/core/testing';

import { UnivCoursesService } from './univ-courses.service';

describe('UnivCoursesService', () => {
  let service: UnivCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
