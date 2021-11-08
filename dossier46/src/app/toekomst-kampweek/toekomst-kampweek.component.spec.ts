import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToekomstKampweekComponent } from './toekomst-kampweek.component';

describe('ToekomstKampweekComponent', () => {
  let component: ToekomstKampweekComponent;
  let fixture: ComponentFixture<ToekomstKampweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToekomstKampweekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToekomstKampweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
