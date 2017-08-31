import { Component } from '@angular/core';
import { OrderDetails, ProductToBuy } from '../order/order.component.viewmodel'
import { Address } from '../address/address.component.viewmodel'
import { ColumnDef, OwnerDetails } from './owner.component.viewmodel'
import { PaymentDetails } from '../payment/payment.component.viewmodel'
import { OwnerService } from '../service/owner.service'

//import {LazyLoadEvent} from '../../../components/common/api';

@Component({
  selector: 'owner',
  templateUrl: './owner.component.html',

})
export class OwnerComponent {
  title: string;
  datasource: OwnerDetails[];
  columnDef: ColumnDef[];
  ownerDetails: OwnerDetails[];
  d: Date;
  totalRecords: number;

  constructor(private _ownerService: OwnerService) { }

  ngOnInit() {
    this.title = 'Owner';
    //datasource imitation
    this._ownerService.FetchOwnersData().subscribe(data => {

      this.datasource = data;
      // this.DataSource(this.datasource);
      this.d = new Date();
      this.totalRecords = this.datasource.length;
      this.ownerDetails = this.datasource.slice(0, 10);
      this.columnDef = this.ColumnDefination();
    });
  }
  // DataSource(data: OrderDetails[]): void {
  //   let orderDetails: OrderDetails[];
  //   for (let entry of data) {
  //     entry.orderCompleted = new Date();
  //   }
  // }

  ColumnDefination(): ColumnDef[] {
    return [
      // { field: 'address.name', header: "Name",controlType:'label' },
      // { field: 'address.phoneNumber', header: 'Mobile Number',controlType:'label' },
      // { field: 'address.pinCode', header: 'PinCode',controlType:'label'},
      // { field: 'address.street', header: 'Street',controlType:'label' },
      // { field: 'address.city', header: 'City' ,controlType:'label'},
      // { field: 'address.state', header: 'State' ,controlType:'label'},
      // { field: 'address.landmark', header: 'Landmark' ,controlType:'label'},
      // { field: 'productToBuy.medicineName', header: 'Medicine Name' ,controlType:'label'},
      // { field: 'productToBuy.medicineManufacturer', header: 'Medicine Manufacturer',controlType:'label' },
      // { field: 'payment', header: 'Payment',controlType:'label' },
      // { field: 'orderPlacedOn', header: 'Order Placed On' ,controlType:'label'},
      // { field: 'orderCompleted', header: 'Order Completed',controlType:'label' },
      // { field: 'controlType', header: 'Delivery' ,controlType:'button'}

      { field: 'name', header: "Name", controlType: 'label' },
      { field: 'phoneNumber', header: 'Mobile Number', controlType: 'label' },
      { field: 'pinCode', header: 'PinCode', controlType: 'label' },
      { field: 'street', header: 'Street', controlType: 'label' },
      { field: 'city', header: 'City', controlType: 'label' },
      { field: 'state', header: 'State', controlType: 'label' },
      { field: 'landmark', header: 'Landmark', controlType: 'label' },
      { field: 'medicineName', header: 'Medicine Name', controlType: 'label' },
      { field: 'medicineManufacturer', header: 'Medicine Manufacturer', controlType: 'label' },
      { field: 'payment', header: 'Payment', controlType: 'label' },
      { field: 'orderPlacedOn', header: 'Order Placed On', controlType: 'label' },
      { field: 'orderCompleted', header: 'Order Completed', controlType: 'label' },
      { field: 'controlType', header: 'Delivery', controlType: 'button' }
    ];
  }

  onButtonClickEvent(a: any, data: any, c: any, d: any) {
    this._ownerService.UpdatedOwnersData(data.orderId).subscribe(data => {

      this.datasource = data;
      // this.DataSource(this.datasource);
      this.d = new Date();
      this.totalRecords = this.datasource.length;
      this.ownerDetails = this.datasource.slice(0, 10);
      this.columnDef = this.ColumnDefination();
    });
  }

  loadCarsLazy(event: any) {

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {

      if (this.datasource) {
        this.ownerDetails = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }
}


export class Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

// this.datasource =  [
    //     {
    //         "vin":"ee8a89d8",
    //         "brand":"Fiat",
    //         "year":1987,
    //         "color":"Maroon"
    //     },
    //     {
    //         "vin":"642b3edc",
    //         "brand":"Renault",
    //         "year":1968,
    //         "color":"White"
    //     },
    //     {
    //         "vin":"19ec7580",
    //         "brand":"Renault",
    //         "year":1981,
    //         "color":"Black"
    //     },
    //     {
    //         "vin":"39980f30",
    //         "brand":"VW",
    //         "year":1986,
    //         "color":"Red"
    //     },
    //     {
    //         "vin":"ec9cc4e4",
    //         "brand":"Fiat",
    //         "year":1981,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"09a06548",
    //         "brand":"VW",
    //         "year":1965,
    //         "color":"Green"
    //     },
    //     {
    //         "vin":"05c47246",
    //         "brand":"Mercedes",
    //         "year":2007,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"a9cb87aa",
    //         "brand":"Fiat",
    //         "year":1962,
    //         "color":"Green"
    //     },
    //     {
    //         "vin":"eae758fa",
    //         "brand":"BMW",
    //         "year":1999,
    //         "color":"Yellow"
    //     },
    //     {
    //         "vin":"1241c403",
    //         "brand":"Jaguar",
    //         "year":1964,
    //         "color":"Yellow"
    //     },
    //     {
    //         "vin":"13f853a7",
    //         "brand":"Honda",
    //         "year":2006,
    //         "color":"White"
    //     },
    //     {
    //         "vin":"447d9ed9",
    //         "brand":"Jaguar",
    //         "year":2005,
    //         "color":"Orange"
    //     },
    //     {
    //         "vin":"78fa052e",
    //         "brand":"Jaguar",
    //         "year":1990,
    //         "color":"Orange"
    //     },
    //     {
    //         "vin":"8b77772a",
    //         "brand":"Mercedes",
    //         "year":1991,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"23ba7e86",
    //         "brand":"Honda",
    //         "year":1975,
    //         "color":"Yellow"
    //     },
    //     {
    //         "vin":"9bacb32d",
    //         "brand":"Volvo",
    //         "year":1968,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"62094d91",
    //         "brand":"Mercedes",
    //         "year":1962,
    //         "color":"Green"
    //     },
    //     {
    //         "vin":"dc7003f4",
    //         "brand":"Jaguar",
    //         "year":1976,
    //         "color":"Maroon"
    //     },
    //     {
    //         "vin":"08607aef",
    //         "brand":"Mercedes",
    //         "year":1987,
    //         "color":"Maroon"
    //     },
    //     {
    //         "vin":"45eee33a",
    //         "brand":"BMW",
    //         "year":1980,
    //         "color":"Silver"
    //     },
    //     {
    //         "vin":"f199ec5c",
    //         "brand":"Jaguar",
    //         "year":1961,
    //         "color":"Green"
    //     },
    //     {
    //         "vin":"b34cd9e8",
    //         "brand":"VW",
    //         "year":1993,
    //         "color":"Silver"
    //     },
    //     {
    //         "vin":"54b20b02",
    //         "brand":"Renault",
    //         "year":1967,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"5dd8766e",
    //         "brand":"Honda",
    //         "year":1998,
    //         "color":"Orange"
    //     },
    //     {
    //         "vin":"df50ce22",
    //         "brand":"Mercedes",
    //         "year":1964,
    //         "color":"White"
    //     },
    //     {
    //         "vin":"ecb3e9e1",
    //         "brand":"Honda",
    //         "year":2003,
    //         "color":"Silver"
    //     },
    //     {
    //         "vin":"750d731d",
    //         "brand":"Renault",
    //         "year":1962,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"bec38cf4",
    //         "brand":"Renault",
    //         "year":1960,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"b7752002",
    //         "brand":"Jaguar",
    //         "year":1964,
    //         "color":"Black"
    //     },
    //     {
    //         "vin":"315fe9c4",
    //         "brand":"Fiat",
    //         "year":1985,
    //         "color":"Red"
    //     },
    //     {
    //         "vin":"be65f786",
    //         "brand":"Mercedes",
    //         "year":1963,
    //         "color":"Orange"
    //     },
    //     {
    //         "vin":"786a7d57",
    //         "brand":"Mercedes",
    //         "year":2003,
    //         "color":"Black"
    //     },
    //     {
    //         "vin":"a3aee412",
    //         "brand":"Volvo",
    //         "year":2003,
    //         "color":"Maroon"
    //     },
    //     {
    //         "vin":"749e6bdd",
    //         "brand":"Audi",
    //         "year":1995,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"8cc40f50",
    //         "brand":"BMW",
    //         "year":1961,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"5de63a6f",
    //         "brand":"Renault",
    //         "year":1961,
    //         "color":"White"
    //     },
    //     {
    //         "vin":"bdae1e20",
    //         "brand":"Jaguar",
    //         "year":2008,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"290cc891",
    //         "brand":"VW",
    //         "year":1992,
    //         "color":"Brown"
    //     },
    //     {
    //         "vin":"007e1014",
    //         "brand":"Renault",
    //         "year":1966,
    //         "color":"Black"
    //     },
    //     {
    //         "vin":"429c502d",
    //         "brand":"Honda",
    //         "year":1995,
    //         "color":"Silver"
    //     },
    //     {
    //         "vin":"c336f9b6",
    //         "brand":"Honda",
    //         "year":1991,
    //         "color":"Maroon"
    //     },
    //     {
    //         "vin":"a6783ba3",
    //         "brand":"Honda",
    //         "year":2004,
    //         "color":"Yellow"
    //     },
    //     {
    //         "vin":"2ddaf8d5",
    //         "brand":"Volvo",
    //         "year":1982,
    //         "color":"Blue"
    //     },
    //     {
    //         "vin":"c09c4b15",
    //         "brand":"VW",
    //         "year":1991,
    //         "color":"Blue"
    //     }];
