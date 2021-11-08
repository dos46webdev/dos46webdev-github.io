import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhoudComponent } from './inhoud.component';

describe('InhoudComponent', () => {
  let component: InhoudComponent;
  let fixture: ComponentFixture<InhoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhoudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
