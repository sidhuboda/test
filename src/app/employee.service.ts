import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './model/employee';
import { delay, map } from 'rxjs/operators';
import sampleData from './model/SampleData.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService { 
  constructor(private httpClient: HttpClient) { }
  userUrl = '/api/v1/employees';
  // SampleData: any = sampleData;  

  productUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  getEmployeeList(): Observable<any>  {
    return of(sampleData).pipe(delay(1000));
  }
  getEmployeeListById(employeeId) {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employee/' + employeeId);
  }

  createEmployee(productBody) {
    return this.httpClient.post('http://dummy.restapiexample.com/api/v1/create', productBody); // return an observable
  }
  updateEmployee(employeeId, productBody): Observable<Employee> {
    const productUrl = 'http://dummy.restapiexample.com/public/api/v1/update/' + employeeId;
    return this.httpClient.put<Employee>(productUrl, productBody); // return an observable
  }

  // deleteEmployee(employeeId): Observable<Employee> {
  //   // const productUrl = 'http://dummy.restapiexample.com/public/api/v1/delete/' + employeeId;
  //   // return this.httpClient.delete<Employee>(productUrl); // return an observable
  //   return of(sampleData).pipe(map((item[]) => item.filterid !== idToRemove);

  // }
}


