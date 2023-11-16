import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInterviewSetterDialogComponent } from './job-interview-setter-dialog.component';

describe('JobInterviewSetterDialogComponent', () => {
  let component: JobInterviewSetterDialogComponent;
  let fixture: ComponentFixture<JobInterviewSetterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobInterviewSetterDialogComponent]
    });
    fixture = TestBed.createComponent(JobInterviewSetterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
