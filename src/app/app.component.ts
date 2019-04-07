
import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
    
})
export class AppComponent {
    public data: any[] = products;
    public pageSize = 50;
    public skip = 0;

    public sliderChange(pageIndex: number): void {
        this.skip = (pageIndex - 1) * this.pageSize;
    }

    public onPageChange(state: any): void {
        this.pageSize = state.take;
    }
}