import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeesRodenburgComponent } from './kees-rodenburg.component';

describe('KeesRodenburgComponent', () => {
  let component: KeesRodenburgComponent;
  let fixture: ComponentFixture<KeesRodenburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeesRodenburgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeesRodenburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
