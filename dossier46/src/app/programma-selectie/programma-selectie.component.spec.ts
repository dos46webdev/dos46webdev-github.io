import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaSelectieComponent } from './programma-selectie.component';

describe('ProgrammaSelectieComponent', () => {
  let component: ProgrammaSelectieComponent;
  let fixture: ComponentFixture<ProgrammaSelectieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammaSelectieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammaSelectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
