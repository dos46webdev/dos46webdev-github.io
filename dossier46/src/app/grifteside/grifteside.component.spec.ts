import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriftesideComponent } from './grifteside.component';

describe('GriftesideComponent', () => {
  let component: GriftesideComponent;
  let fixture: ComponentFixture<GriftesideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriftesideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriftesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
