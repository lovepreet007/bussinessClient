export interface Status {
  statusId: string;
  statusValue: string;
}
export interface GenerateReportDetails {
  fromDate: Date;
  toDate: Date;
  status: string;
}
export interface ReportDetails {
  medicineName: string;
  medicineManufacturer
  name: string;
  phoneNumber: string;
  pinCode: string;
  street: string;
  city: string;
  state: string;
  landmark: string;
  verification: string;
  paymentOption: string;
  isActive: boolean;
  orderPlacedOn: Date;
  orderCompleted: Date;
}


