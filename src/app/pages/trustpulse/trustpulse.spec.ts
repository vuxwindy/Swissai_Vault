import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trustpulse } from './trustpulse';

describe('Trustpulse', () => {
  let component: Trustpulse;
  let fixture: ComponentFixture<Trustpulse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trustpulse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trustpulse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
