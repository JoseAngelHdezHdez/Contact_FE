import { TestBed } from '@angular/core/testing';

import { ContactoApiService } from './contacto-api.service';

describe('ContactoApiService', () => {
  let service: ContactoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
