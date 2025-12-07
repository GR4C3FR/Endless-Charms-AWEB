import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementRings } from './engagement-rings';

describe('EngagementRings', () => {
  let component: EngagementRings;
  let fixture: ComponentFixture<EngagementRings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementRings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementRings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
