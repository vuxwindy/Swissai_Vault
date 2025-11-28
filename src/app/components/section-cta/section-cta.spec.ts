import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCta } from './section-cta';

describe('SectionCta', () => {
  let component: SectionCta;
  let fixture: ComponentFixture<SectionCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
