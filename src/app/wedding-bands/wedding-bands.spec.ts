import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingBands } from './wedding-bands';

describe('WeddingBands', () => {
  let component: WeddingBands;
  let fixture: ComponentFixture<WeddingBands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingBands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingBands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
