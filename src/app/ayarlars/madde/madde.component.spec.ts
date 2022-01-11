import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddeComponent } from './madde.component';

describe('MaddeComponent', () => {
  let component: MaddeComponent;
  let fixture: ComponentFixture<MaddeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaddeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
