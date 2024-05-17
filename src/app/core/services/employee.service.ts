import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dataUrl = '../../../assets/employees.json';
  private expandAllState = new BehaviorSubject<boolean>(false);
  expandAllState$ = this.expandAllState.asObservable();

  constructor(private _http: HttpClient) { }

  // Build The tree of the employess with children
  buildEmployeeTree(employees: Employee[]): Employee[] {
    debugger;
    const tree: Employee[] = [];
    const map = employees.reduce((acc, employee) => {
      acc[employee.id] = employee;
      return acc;
    }, {} as { [key: number]: Employee });

    employees.map(employee => {
      debugger;
      if (employee.manager_id === null) {
        tree.push(employee);
      }
      else
      {
        const parent = map[employee.manager_id];
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(employee);
        }
      }
    });

    return tree;
  }

  getEmployess(): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.dataUrl).pipe(map(data => this.buildEmployeeTree(data)));
  }

  // Set The expand state of the tree
  setExpandAllState(state: boolean) {
    this.expandAllState.next(state);
  }

}
