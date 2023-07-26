import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonSeriesComponent } from './sermon-series.component';

describe('SermonSeriesComponent', () => {
  let component: SermonSeriesComponent;
  let fixture: ComponentFixture<SermonSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SermonSeriesComponent]
    });
    fixture = TestBed.createComponent(SermonSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
