import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRejectionDialogComponent } from './job-rejection-dialog.component';

describe('JobRejectionDialogComponent', () => {
  let component: JobRejectionDialogComponent;
  let fixture: ComponentFixture<JobRejectionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobRejectionDialogComponent]
    });
    fixture = TestBed.createComponent(JobRejectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
