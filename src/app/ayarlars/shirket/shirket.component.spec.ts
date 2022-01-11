import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirketComponent } from './shirket.component';

describe('ShirketComponent', () => {
  let component: ShirketComponent;
  let fixture: ComponentFixture<ShirketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShirketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShirketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
