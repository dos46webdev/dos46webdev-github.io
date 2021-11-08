import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbergPleinComponent } from './herberg-plein.component';

describe('HerbergPleinComponent', () => {
  let component: HerbergPleinComponent;
  let fixture: ComponentFixture<HerbergPleinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbergPleinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbergPleinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
