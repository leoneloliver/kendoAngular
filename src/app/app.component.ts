import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

declare var myAct: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})
export class AppComponent implements OnInit {
  public data: any[] = products;
  public pageSize = 20;
  public skip = 0;

  ngOnInit() {
    myAct();
  }

  // public sliderChange(pageIndex: number): void {
  //     this.skip = (pageIndex - 1) * this.pageSize;
  // }
  // public onPageChange(state: any): void {
  //     this.pageSize = state.take;
  // }
}