import { TestBed } from '@angular/core/testing';

import { ApiCoursService } from './api-cours.service';

describe('ApiCoursService', () => {
  let service: ApiCoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
