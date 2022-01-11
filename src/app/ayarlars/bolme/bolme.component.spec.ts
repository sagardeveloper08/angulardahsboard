import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolmeComponent } from './bolme.component';

describe('BolmeComponent', () => {
  let component: BolmeComponent;
  let fixture: ComponentFixture<BolmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
