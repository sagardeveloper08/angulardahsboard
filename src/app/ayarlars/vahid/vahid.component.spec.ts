import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VahidComponent } from './vahid.component';

describe('VahidComponent', () => {
  let component: VahidComponent;
  let fixture: ComponentFixture<VahidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VahidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VahidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
