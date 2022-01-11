import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyarListComponent } from './ayar-list.component';

describe('AyarListComponent', () => {
  let component: AyarListComponent;
  let fixture: ComponentFixture<AyarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
