import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVEComponent } from './ive.component';

describe('IVEComponent', () => {
  let component: IVEComponent;
  let fixture: ComponentFixture<IVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IVEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
