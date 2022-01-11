import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCart1Component } from './shoping-cart1.component';

describe('ShopingCart1Component', () => {
  let component: ShopingCart1Component;
  let fixture: ComponentFixture<ShopingCart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
