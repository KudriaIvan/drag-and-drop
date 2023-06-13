import { Component } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-chart-pie-demo',
  templateUrl: './chart-pie-demo.component.html',
  styleUrls: ['./chart-pie-demo.component.scss']
})
export class ChartPieDemoComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
}
