import { TestBed } from '@angular/core/testing';

import { BlogChannelService } from './blogchannel.service';

describe('BlogChannelService', () => {
  let service: BlogChannelService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogChannelService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
