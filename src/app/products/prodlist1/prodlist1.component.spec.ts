import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodlist1Component } from './prodlist1.component';

describe('Prodlist1Component', () => {
  let component: Prodlist1Component;
  let fixture: ComponentFixture<Prodlist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prodlist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prodlist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
