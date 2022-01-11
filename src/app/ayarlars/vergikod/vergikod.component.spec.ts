import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VergikodComponent } from './vergikod.component';

describe('VergikodComponent', () => {
  let component: VergikodComponent;
  let fixture: ComponentFixture<VergikodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VergikodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VergikodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
