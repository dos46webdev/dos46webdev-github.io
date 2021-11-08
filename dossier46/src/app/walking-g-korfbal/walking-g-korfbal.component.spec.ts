import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingGKorfbalComponent } from './walking-g-korfbal.component';

describe('WalkingGKorfbalComponent', () => {
  let component: WalkingGKorfbalComponent;
  let fixture: ComponentFixture<WalkingGKorfbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkingGKorfbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingGKorfbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
