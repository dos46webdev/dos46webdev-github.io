import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdJeugdOpleidingComponent } from './hoofd-jeugd-opleiding.component';

describe('HoofdJeugdOpleidingComponent', () => {
  let component: HoofdJeugdOpleidingComponent;
  let fixture: ComponentFixture<HoofdJeugdOpleidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoofdJeugdOpleidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdJeugdOpleidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
