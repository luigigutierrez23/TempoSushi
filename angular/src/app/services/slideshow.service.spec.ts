/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlideshowService } from './slideshow.service';

describe('Service: Slideshow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideshowService]
    });
  });

  it('should ...', inject([SlideshowService], (service: SlideshowService) => {
    expect(service).toBeTruthy();
  }));
});
