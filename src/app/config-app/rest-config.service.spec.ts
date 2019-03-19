import { TestBed } from '@angular/core/testing';

import { RestConfigService } from './rest-config.service';

describe('RestConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestConfigService = TestBed.get(RestConfigService);
    expect(service).toBeTruthy();
  });
});
