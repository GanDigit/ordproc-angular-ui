import { TestBed } from '@angular/core/testing';

import { RestOrderService } from './rest-order.service';

describe('RestOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestOrderService = TestBed.get(RestOrderService);
    expect(service).toBeTruthy();
  });
});
