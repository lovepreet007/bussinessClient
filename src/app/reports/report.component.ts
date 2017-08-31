import { Component } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Status, GenerateReportDetails, ReportDetails } from './report.component.viewmodel'
import { ReportService } from '../service/report.service'
import { saveAs } from 'file-saver';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',

})
export class ReportComponent {
  private from: Date;
  private to: Date;

  exportedExcel: boolean = true;
  selectedStatus: any;
  status: SelectItem[];
  generateReport: GenerateReportDetails;
  report: ReportDetails[];

  constructor(private _reportService: ReportService) {

    this.status = [];
    this.status.push({ label: 'Select Status', value: { id: 0, name: 'select', code: 'select' } });
    this.status.push({ label: 'Active', value: { id: 1, name: 'active', code: 'active' } });
    this.status.push({ label: 'Inactive', value: { id: 2, name: 'inactive', code: 'inactive' } });
    this.generateReport = this.InitializeGenerateReportDetails();
  }
  GenerateReport() {
    if (this.selectedStatus != undefined) {
      this.generateReport.status = this.selectedStatus.id;
      this._reportService.GenerateReport(this.generateReport).subscribe(data => { this.ReportGeneration(data) });
    } else {
      this.generateReport.status = '0';

      this._reportService.GenerateReport(this.generateReport).subscribe(data => { this.ReportGeneration(data) });
    }
  }

  public ReportGeneration(data: ReportDetails[]) {
    this.report = this.InitializeReportDetails();
    this.report = data;
    setTimeout(function () {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
    }, 1000);
  };

  public InitializeGenerateReportDetails(): GenerateReportDetails {
    return {
      fromDate: new Date(),
      toDate: new Date(),
      status: ''
    }
  }
  public InitializeReportDetails(): ReportDetails[] {
    return [{
      medicineName: '',
      medicineManufacturer: '',
      name: '',
      phoneNumber: '',
      pinCode: '',
      street: '',
      city: '',
      state: '',
      landmark: '',
      verification: '',
      paymentOption: '',
      isActive: null,
      orderPlacedOn: new Date(),
      orderCompleted: new Date()
    }]
  }
}
