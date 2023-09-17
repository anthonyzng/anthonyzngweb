import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HACTLComponent } from './hactl.component';

describe('HACTLComponent', () => {
  let component: HACTLComponent;
  let fixture: ComponentFixture<HACTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HACTLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HACTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
