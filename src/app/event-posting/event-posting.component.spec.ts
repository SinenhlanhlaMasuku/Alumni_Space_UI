import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPostingComponent } from './event-posting.component';

describe('EventPostingComponent', () => {
  let component: EventPostingComponent;
  let fixture: ComponentFixture<EventPostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPostingComponent]
    });
    fixture = TestBed.createComponent(EventPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
