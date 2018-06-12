import { TestBed, inject } from '@angular/core/testing';

import { BeautyHackService } from './beauty-hack.service';

describe('BeautyHackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeautyHackService]
    });
  });

  it('should be created', inject([BeautyHackService], (service: BeautyHackService) => {
    expect(service).toBeTruthy();
  }));
});
