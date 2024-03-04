import { TestBed } from '@angular/core/testing';

import { ComdaUiService } from './comda-ui.service';

describe('ComdaUiService', () => {
  let service: ComdaUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComdaUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
