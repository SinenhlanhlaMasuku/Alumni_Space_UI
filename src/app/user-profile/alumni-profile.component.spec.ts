import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniProfileComponent } from './alumni-profile.component';
import{bootstrap} from 'node_modules/bootstrap';

describe('AlumniProfileComponent', () => {
  let component: AlumniProfileComponent;
  let fixture: ComponentFixture<AlumniProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniProfileComponent]
    });
    fixture = TestBed.createComponent(AlumniProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
