import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType
} from "angular-gridster2";
import {ChartBarDemoComponent} from "./chart-bar-demo/chart-bar-demo.component";
import {ChartPieDemoComponent} from "./chart-pie-demo/chart-pie-demo.component";
import {ChartLineDemoComponent} from "./chart-line-demo/chart-line-demo.component";

export interface MatrixItem<T> extends GridsterItem {
  component?: any; // You can set up component data
  data?: T;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChildren('dynamicComponentContainer', { read: ViewContainerRef }) public componentContainers!: QueryList<ViewContainerRef>;

  public options!: GridsterConfig;
  public matrix!: Array<MatrixItem<any>>; // Here you can add you typing

  ngAfterViewInit() {
    this.matrix.forEach((item, index) => {
      if (item.component) {
        const componentRef = this.componentContainers.toArray()[index].createComponent(item.component);
        (componentRef.instance as any).data = item.data;
      }
    });
  }

  public ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      direction: 'ltr',
      compactType: CompactType.CompactLeft,
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      itemInitCallback: AppComponent.itemInit,
      itemRemovedCallback: AppComponent.itemRemoved,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: false
      },
      swap: true,
      displayGrid: DisplayGrid.None,
      fixedRowHeight: 400,
      defaultItemCols: 2,
      maxCols: 12
    };

    this.matrix = [
      {cols: 2, rows: 1, x: 0, y: 0, name: 'Item 2-2', component: ChartPieDemoComponent},
      {cols: 2, rows: 1, x: 2, y: 0, name: 'Item 2-2', component: ChartPieDemoComponent},
      {cols: 2, rows: 1, x: 10, y: 0, name: 'Item 2-2',  component: ChartPieDemoComponent},
      {cols: 2, rows: 1, x: 0, y: 1, name: 'Item 2 2-4', minCols: 2, maxCols: 4, component: ChartBarDemoComponent},
      {cols: 3, rows: 1, x: 2, y: 1, name: 'Item 2-4', minCols: 2, maxCols: 4, component: ChartBarDemoComponent},
      {cols: 4, rows: 1, x: 5, y: 1, name: 'Item 2-4', minCols: 2, maxCols: 4, component: ChartBarDemoComponent},
      {cols: 4, rows: 1, x: 0, y: 2, name: 'Item 4-6', minCols: 4, maxCols: 6, component: ChartLineDemoComponent},
      {cols: 5, rows: 1, x: 4, y: 2, name: 'Item 4-6', minCols: 4, maxCols: 6, component: ChartLineDemoComponent},
      {cols: 10, rows: 1, x: 9, y: 4, name: 'Item 7-12', minCols: 7, maxCols: 12, component: ChartLineDemoComponent},
    ];
  }

  public static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemChanged', item, itemComponent);
  }

  public static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemResized', item, itemComponent);
  }

  public static itemInit(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemInitialized', item, itemComponent);
  }

  public static itemRemoved(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemRemoved', item, itemComponent);
  }
}
