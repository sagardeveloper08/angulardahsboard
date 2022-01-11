import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushteriComponent } from './mushteri.component';

describe('MushteriComponent', () => {
  let component: MushteriComponent;
  let fixture: ComponentFixture<MushteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MushteriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MushteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
