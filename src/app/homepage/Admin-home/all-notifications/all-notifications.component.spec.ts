import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AllNotificationsComponent } from './homepage/admin-home/all-notifications/all-notifications.component';
import { AllNotificationsComponent } from '../../../homepage/admin-home/all-notifications/all-notifications.component';
describe('AllNotificationsComponent', () => {
  let component: AllNotificationsComponent;
  let fixture: ComponentFixture<AllNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllNotificationsComponent]
    });
    fixture = TestBed.createComponent(AllNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
