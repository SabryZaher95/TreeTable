import { Employee } from 'src/app/core/interfaces/employee';
import { EmployeeService } from './../../core/services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-tree',
  templateUrl: './employee-tree.component.html',
  styleUrls: ['./employee-tree.component.css']
})
export class EmployeeTreeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private _EmployeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this._EmployeeService.getEmployess().subscribe({
      next: data => {
        this.employees = data;
      },
    })
  }

  expandAll() {
    this._EmployeeService.setExpandAllState(true);
  }

  collapseAll() {
    this._EmployeeService.setExpandAllState(false);
  }
}
