import { Address } from '../address/address.component.viewmodel'
import { PaymentDetails } from '../payment/payment.component.viewmodel'
export class ProductToBuy {
  medicineId: string;
  medicineName: string;
  medicineManufacturer: string;
  filterId: string;
}
export class OrderDetails {
  address: Address;
  productToBuy: ProductToBuy;
  payment:string;
  isActive :boolean;
  orderPlacedOn:Date;
  orderCompleted:Date;
}
export class ResponseResult{
  status:string;
  message:string;
}




