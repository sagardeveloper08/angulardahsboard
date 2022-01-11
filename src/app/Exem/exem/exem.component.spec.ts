import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemComponent } from './exem.component';

describe('ExemComponent', () => {
  let component: ExemComponent;
  let fixture: ComponentFixture<ExemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
