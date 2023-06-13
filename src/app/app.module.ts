import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridsterModule } from "angular-gridster2";
import { ChartLineDemoComponent } from './chart-line-demo/chart-line-demo.component';
import { ChartPieDemoComponent } from './chart-pie-demo/chart-pie-demo.component';
import { ChartBarDemoComponent } from './chart-bar-demo/chart-bar-demo.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ChartLineDemoComponent,
    ChartPieDemoComponent,
    ChartBarDemoComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
