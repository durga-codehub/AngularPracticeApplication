import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsComponent } from './dynamic-components.component';

describe('DynamicComponentsComponent', () => {
  let component: DynamicComponentsComponent;
  let fixture: ComponentFixture<DynamicComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
