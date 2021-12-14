import { TestBed } from '@angular/core/testing';

import { UsersSearchParamsService } from './users-search-params.service';

describe('UsersSearchParamsService', () => {
  let service: UsersSearchParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersSearchParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
