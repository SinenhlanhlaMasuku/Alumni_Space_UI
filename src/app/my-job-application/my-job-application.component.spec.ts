import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobApplicationComponent } from './my-job-application.component';

describe('MyJobApplicationComponent', () => {
  let component: MyJobApplicationComponent;
  let fixture: ComponentFixture<MyJobApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyJobApplicationComponent]
    });
    fixture = TestBed.createComponent(MyJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
