import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyeditorComponent } from './replyeditor.component';

describe('ReplyeditorComponent', () => {
  let component: ReplyeditorComponent;
  let fixture: ComponentFixture<ReplyeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
