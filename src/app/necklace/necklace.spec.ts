import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Necklace } from './necklace';

describe('Necklace', () => {
  let component: Necklace;
  let fixture: ComponentFixture<Necklace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Necklace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Necklace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
