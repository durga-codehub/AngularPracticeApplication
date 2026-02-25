import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingThrotlingComponent } from './debouncing-throtling.component';

describe('DebouncingThrotlingComponent', () => {
  let component: DebouncingThrotlingComponent;
  let fixture: ComponentFixture<DebouncingThrotlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebouncingThrotlingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebouncingThrotlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
