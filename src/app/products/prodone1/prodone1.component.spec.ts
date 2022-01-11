import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodone1Component } from './prodone1.component';

describe('Prodone1Component', () => {
  let component: Prodone1Component;
  let fixture: ComponentFixture<Prodone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prodone1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prodone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
