import { TestBed } from '@angular/core/testing';

import { RacesServiceWithHttpService } from './races-service-with-http.service';

describe('RacesServiceWithHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RacesServiceWithHttpService = TestBed.get(RacesServiceWithHttpService);
    expect(service).toBeTruthy();
  });
});
