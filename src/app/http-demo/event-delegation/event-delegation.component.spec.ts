import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDelegationComponent } from './event-delegation.component';

describe('EventDelegationComponent', () => {
  let component: EventDelegationComponent;
  let fixture: ComponentFixture<EventDelegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDelegationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
