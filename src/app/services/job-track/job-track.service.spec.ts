import { TestBed } from '@angular/core/testing';

import { JobTrackService } from './job-track.service';

describe('JobTrackService', () => {
  let service: JobTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
