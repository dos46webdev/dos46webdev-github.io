import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerdeHelftComponent } from './derde-helft.component';

describe('DerdeHelftComponent', () => {
  let component: DerdeHelftComponent;
  let fixture: ComponentFixture<DerdeHelftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerdeHelftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerdeHelftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
