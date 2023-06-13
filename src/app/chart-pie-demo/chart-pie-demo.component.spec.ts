import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPieDemoComponent } from './chart-pie-demo.component';

describe('ChartPieDemoComponent', () => {
  let component: ChartPieDemoComponent;
  let fixture: ComponentFixture<ChartPieDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPieDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPieDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
