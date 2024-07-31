import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent {
  fileName = "ExcelSheet.xlsx"

  userData = [
    { "FirstName": "Ragul", "LastName": "TN", "Age": 29, "Gender": "Male" },
    { "FirstName": "Aditi", "LastName": "Sharma", "Age": 25, "Gender": "Female" },
    { "FirstName": "John", "LastName": "Doe", "Age": 32, "Gender": "Male" },
    { "FirstName": "Jane", "LastName": "Smith", "Age": 28, "Gender": "Female" },
    { "FirstName": "Carlos", "LastName": "Mendez", "Age": 34, "Gender": "Male" },
    { "FirstName": "Nina", "LastName": "Brown", "Age": 30, "Gender": "Female" },
    { "FirstName": "Liam", "LastName": "Jones", "Age": 27, "Gender": "Male" },
    { "FirstName": "Emma", "LastName": "Garcia", "Age": 22, "Gender": "Female" },
    { "FirstName": "Noah", "LastName": "Wilson", "Age": 31, "Gender": "Male" },
    { "FirstName": "Olivia", "LastName": "Martinez", "Age": 26, "Gender": "Female" },
  ];

  excelExport(){
    let data = document.getElementById("user-table");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

    XLSX.writeFile(wb, this.fileName)
  }


  pdfExport(){
    let data = document.getElementById("user-table");
    html2canvas(data!).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF.jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('user-table.pdf');
    });
  }

}
