import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarDemoComponent } from './chart-bar-demo.component';

describe('ChartBarDemoComponent', () => {
  let component: ChartBarDemoComponent;
  let fixture: ComponentFixture<ChartBarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
