import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPageComponentComponent } from './cover-page-component.component';

describe('CoverPageComponentComponent', () => {
  let component: CoverPageComponentComponent;
  let fixture: ComponentFixture<CoverPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
