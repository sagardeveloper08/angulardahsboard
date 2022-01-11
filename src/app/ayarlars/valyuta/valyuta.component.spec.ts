import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValyutaComponent } from './valyuta.component';

describe('ValyutaComponent', () => {
  let component: ValyutaComponent;
  let fixture: ComponentFixture<ValyutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValyutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValyutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
