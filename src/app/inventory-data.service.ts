import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {
    arr : any[] = [{"id":"0","names":"kesavan","class":"MCA","subject":"eng"},{"id":"1","names":"adhis","class":"MCA","subject":"tam"}];
  editDatas:any;
    constructor() { }
  getData(): Observable<any[]> {
    return of(this.arr);
  }
  addData(data:any) {
    this.arr.push(data);
    console.log(this.arr);
    
  }
  editData(data:any){
    this.editDatas=data;
    console.log(this.editDatas);
  }
  editDataArrValue(): Observable<any[]> {
    return of(this.arr[this.editDatas]);
  }
  editDataSetVal(data:any){
    this.arr[this.editDatas]=data;
  }
  deleteData(data:any){
    this.arr.splice(data); 
  }
}
