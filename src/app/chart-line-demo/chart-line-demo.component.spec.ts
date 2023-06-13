import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineDemoComponent } from './chart-line-demo.component';

describe('ChartLineDemoComponent', () => {
  let component: ChartLineDemoComponent;
  let fixture: ComponentFixture<ChartLineDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLineDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
