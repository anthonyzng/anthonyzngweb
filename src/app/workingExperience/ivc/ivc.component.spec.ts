import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVCComponent } from './ivc.component';

describe('IVCComponent', () => {
  let component: IVCComponent;
  let fixture: ComponentFixture<IVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
