import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivlerComponent } from './aktivler.component';

describe('AktivlerComponent', () => {
  let component: AktivlerComponent;
  let fixture: ComponentFixture<AktivlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AktivlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
