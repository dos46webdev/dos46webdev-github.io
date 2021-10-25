import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPageComponentComponent } from './left-page-component.component';

describe('LeftPageComponentComponent', () => {
  let component: LeftPageComponentComponent;
  let fixture: ComponentFixture<LeftPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
