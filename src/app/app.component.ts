import { Component, OnInit } from '@angular/core';
import { InventoryDataService } from './inventory-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';

  ItemsArray: any[] = [];
  constructor(private crudService: InventoryDataService) {}
  ngOnInit() {
    this.crudService.getData()
    .subscribe(arr => this.ItemsArray = arr);
    console.log(this.ItemsArray);
  }
  ngAfterViewInit(){
    this.crudService.getData()
    .subscribe(arr => this.ItemsArray = arr);
    console.log(this.ItemsArray);
  }
}
