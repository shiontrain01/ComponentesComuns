import { TestBed } from '@angular/core/testing';

import { HelloWorldLibService } from './hello-world-lib.service';

describe('HelloWorldLibService', () => {
  let service: HelloWorldLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
