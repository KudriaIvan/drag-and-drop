import { Component } from '@angular/core';
import { ChartConfiguration } from "chart.js";

@Component({
  selector: 'app-chart-bar-demo',
  templateUrl: './chart-bar-demo.component.html',
  styleUrls: ['./chart-bar-demo.component.scss']
})
export class ChartBarDemoComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }
}
