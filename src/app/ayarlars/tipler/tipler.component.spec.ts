import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiplerComponent } from './tipler.component';

describe('TiplerComponent', () => {
  let component: TiplerComponent;
  let fixture: ComponentFixture<TiplerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiplerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
