import { Component, OnInit } from '@angular/core';
import { InventoryDataService } from '../inventory-data.service';
@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})
export class InventoryTableComponent implements OnInit {
  ItemsArray: any[] = [];
  clazz: any[] = [];
  constructor(private crudService: InventoryDataService) {}
  ngOnInit() {
    this.crudService.getData()
    .subscribe(arr => this.ItemsArray = arr);
    console.log(this.ItemsArray);
  }
  editInventroy(data:any){
    this.crudService.editData(data); 
  }
  deleteInventory(data:any){
    this.crudService.deleteData(data);
  }
 
}
