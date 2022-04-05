import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  constructor(private crudService: InventoryDataService,private router: Router) {}

  ngOnInit(): void {
  }
   inventoryForm = new FormGroup({
    id: new FormControl(''),
    names: new FormControl(''),
    class: new FormControl(''),
    subject: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    
    this.crudService.addData(this.inventoryForm.value);
    this.router.navigateByUrl('');
  }
 
}
