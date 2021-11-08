import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorwoordComponent } from './voorwoord.component';

describe('VoorwoordComponent', () => {
  let component: VoorwoordComponent;
  let fixture: ComponentFixture<VoorwoordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoorwoordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorwoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
