import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {AddInventoryComponent} from './add-inventory/add-inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { EditInventoryComponent } from './edit-inventory/edit-inventory.component';
@NgModule({
  declarations: [
    AppComponent,
    AddInventoryComponent,
    InventoryTableComponent,
    EditInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'addInventory', component: AddInventoryComponent},
    ]),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
