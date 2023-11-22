import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInterviewStatusDialogComponent } from './job-interview-status-dialog.component';

describe('JobInterviewStatusDialogComponent', () => {
  let component: JobInterviewStatusDialogComponent;
  let fixture: ComponentFixture<JobInterviewStatusDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobInterviewStatusDialogComponent]
    });
    fixture = TestBed.createComponent(JobInterviewStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
