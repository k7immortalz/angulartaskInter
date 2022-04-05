import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {AddInventoryComponent} from './add-inventory/add-inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
const routes: Routes = [
  {
    path: '',
    component: InventoryTableComponent
  },
  {
    path: 'addInventory',
    component: AddInventoryComponent
  },
  {
    path: 'editInventory',
    component: EditInventoryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
