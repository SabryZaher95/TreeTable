import { EmployeeService } from './../../core/services/employee.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employee';

@Component({
  selector: 'app-employee-node',
  templateUrl: './employee-node.component.html',
  styleUrls: ['./employee-node.component.css']
})
export class EmployeeNodeComponent implements OnInit, OnDestroy{

  @Input() employee: Employee = {} as Employee;
  showChildren: boolean = false;
  private expandAllSubscription: Subscription = new Subscription();

  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.expandAllSubscription = this._employeeService.expandAllState$.subscribe(state => {
      this.showChildren = state;
    });
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    debugger;
    this.showChildren = changes['expandAll'].currentValue;
  }*/

  toggleChildren() {
    this.showChildren = !this.showChildren;
  }

  ngOnDestroy(): void {
    if (this.expandAllSubscription) {
      this.expandAllSubscription.unsubscribe();
    }
  }
}
