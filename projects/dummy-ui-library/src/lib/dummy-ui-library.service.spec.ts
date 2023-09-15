import { TestBed } from '@angular/core/testing';

import { DummyUiLibraryService } from './dummy-ui-library.service';

describe('DummyUiLibraryService', () => {
  let service: DummyUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
