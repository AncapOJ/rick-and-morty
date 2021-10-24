import { TestBed } from '@angular/core/testing';

import { IsLoadingServiceService } from './is-loading-service.service';

describe('IsLoadingServiceService', () => {
  let service: IsLoadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
