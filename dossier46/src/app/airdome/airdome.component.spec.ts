import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdomeComponent } from './airdome.component';

describe('AirdomeComponent', () => {
  let component: AirdomeComponent;
  let fixture: ComponentFixture<AirdomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirdomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirdomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
