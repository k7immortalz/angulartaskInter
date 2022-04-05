import { Component, OnInit } from '@angular/core';
import { InventoryDataService } from '../inventory-data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  constructor(private crudService: InventoryDataService,private router: Router) { }
  ItemsArray: any;
  
  ngOnInit(): void {
    this.crudService.editDataArrValue()
    .subscribe(arr => this.ItemsArray=arr);
    console.log(this.ItemsArray);
    for(let i = 0;i<=0;i++){
      this.editinventoryForm.get('id')?.setValue(this.ItemsArray.id);
      this.editinventoryForm.get('names')?.setValue(this.ItemsArray.names);
      this.editinventoryForm.get('class')?.setValue(this.ItemsArray.class);
      this.editinventoryForm.get('subject')?.setValue(this.ItemsArray.subject);
    }
    
  }
  editinventoryForm = new FormGroup({
    id: new FormControl(''),
    names: new FormControl(''),
    class: new FormControl(''),
    subject: new FormControl('')
  });
  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.crudService.editDataSetVal(this.editinventoryForm.value);
    this.router.navigateByUrl('');
  }

}
