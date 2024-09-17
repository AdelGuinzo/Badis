import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineTrackingComponent } from './machine-tracking.component';

describe('MachineTrackingComponent', () => {
  let component: MachineTrackingComponent;
  let fixture: ComponentFixture<MachineTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
