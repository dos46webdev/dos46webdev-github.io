import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPageComponentComponent } from './right-page-component.component';

describe('RightPageComponentComponent', () => {
  let component: RightPageComponentComponent;
  let fixture: ComponentFixture<RightPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
