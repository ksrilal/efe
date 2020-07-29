import { TestBed } from '@angular/core/testing';

import { TeacherProChatService } from './teacher-pro-chat.service';

describe('TeacherProChatService', () => {
  let service: TeacherProChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherProChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
