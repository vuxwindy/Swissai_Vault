import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpages } from './landingpages';

describe('Landingpages', () => {
  let component: Landingpages;
  let fixture: ComponentFixture<Landingpages>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
