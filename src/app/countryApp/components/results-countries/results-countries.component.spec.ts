import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCountriesComponent } from './results-countries.component';

describe('ResultsCountriesComponent', () => {
  let component: ResultsCountriesComponent;
  let fixture: ComponentFixture<ResultsCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
