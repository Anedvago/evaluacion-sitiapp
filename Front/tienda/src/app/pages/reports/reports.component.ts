import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/reports/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent implements OnInit {
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getReportOne().subscribe((data) => {
      this.reportOneInfo = data;
    });
    this.reportService.getReportTwo().subscribe((data) => {
      this.reportTwoInfo = data;
    });
  }

  reportOneInfo: any[] = [];
  reportTwoInfo: any[] = [];
}
