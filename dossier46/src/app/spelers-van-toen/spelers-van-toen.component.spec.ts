import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelersVanToenComponent } from './spelers-van-toen.component';

describe('SpelersVanToenComponent', () => {
  let component: SpelersVanToenComponent;
  let fixture: ComponentFixture<SpelersVanToenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpelersVanToenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelersVanToenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
