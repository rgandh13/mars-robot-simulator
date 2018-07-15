import { TestBed, inject } from '@angular/core/testing';

import { TableTopService } from './table-top.service';

describe('TableTopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableTopService]
    });
  });

  it('should be created', inject([TableTopService], (service: TableTopService) => {
    expect(service).toBeTruthy();
  }));
});
