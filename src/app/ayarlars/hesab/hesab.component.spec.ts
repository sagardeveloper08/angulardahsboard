import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesabComponent } from './hesab.component';

describe('HesabComponent', () => {
  let component: HesabComponent;
  let fixture: ComponentFixture<HesabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HesabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
