import { TestBed, inject } from '@angular/core/testing';

import { OutdoorhacksService } from './outdoorhacks.service';

describe('OutdoorhacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutdoorhacksService]
    });
  });

  it('should be created', inject([OutdoorhacksService], (service: OutdoorhacksService) => {
    expect(service).toBeTruthy();
  }));
});
