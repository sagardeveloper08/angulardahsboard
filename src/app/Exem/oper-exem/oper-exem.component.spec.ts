import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperExemComponent } from './oper-exem.component';

describe('OperExemComponent', () => {
  let component: OperExemComponent;
  let fixture: ComponentFixture<OperExemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperExemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperExemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
