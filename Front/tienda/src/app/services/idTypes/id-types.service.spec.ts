import { TestBed } from '@angular/core/testing';

import { IdTypesService } from './id-types.service';

describe('IdTypesService', () => {
  let service: IdTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
