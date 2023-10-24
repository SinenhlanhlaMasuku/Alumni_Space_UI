import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatModule } from '../chat/chat/chat.module';
import { GroupChatComponent } from './group-chat.component';
import { MyNetworkComponent } from '../my-network.component';

describe('GroupChatComponent', () => {
  let component: GroupChatComponent;
  let fixture: ComponentFixture<GroupChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupChatComponent]
    });
    fixture = TestBed.createComponent(GroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
