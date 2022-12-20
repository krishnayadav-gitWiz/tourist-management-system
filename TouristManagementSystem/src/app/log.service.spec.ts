import { TestBed } from '@angular/core/testing';

import { LogService } from './log.service';

describe('LogService', () => {
  let service: LogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService);
  });

  it('logger should be created for home page', () => {
    expect(service).toBeTruthy();
  });
});
