import { TestBed } from '@angular/core/testing';

import { QuickNoteService } from './quick-note.service';

describe('QuickNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickNoteService = TestBed.get(QuickNoteService);
    expect(service).toBeTruthy();
  });
});
