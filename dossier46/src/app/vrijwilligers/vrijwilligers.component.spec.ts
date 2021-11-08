import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrijwilligersComponent } from './vrijwilligers.component';

describe('VrijwilligersComponent', () => {
  let component: VrijwilligersComponent;
  let fixture: ComponentFixture<VrijwilligersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrijwilligersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VrijwilligersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
