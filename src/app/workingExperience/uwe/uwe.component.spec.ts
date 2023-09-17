import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UWEComponent } from './uwe.component';

describe('UWEComponent', () => {
  let component: UWEComponent;
  let fixture: ComponentFixture<UWEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UWEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UWEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
