import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewingComponent } from './event-viewing.component';

describe('EventViewingComponent', () => {
  let component: EventViewingComponent;
  let fixture: ComponentFixture<EventViewingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventViewingComponent]
    });
    fixture = TestBed.createComponent(EventViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
