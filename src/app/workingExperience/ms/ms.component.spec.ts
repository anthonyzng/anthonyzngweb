import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSComponent } from './ms.component';

describe('MSComponent', () => {
  let component: MSComponent;
  let fixture: ComponentFixture<MSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
