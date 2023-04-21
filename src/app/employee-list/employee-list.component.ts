import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import sampleData from '../model/SampleData.json';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeedetails: any;
  empid = 0;
  SampleData: any = sampleData;  
  constructor(private employeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeService.getEmployeeList().subscribe((list: any) => {
      console.log("data=", list),
      console.log("data=chap", list.chapters),
        this.employeedetails = list;
    });
  }

  
  deleteId(id) {
    console.log('Deleted id', id);
    (this.SampleData).filter(data => {
      console.log( data.chapters)
      data.chapters.forEach(element => {
        console.log(element)
        element.topics.filter(da => da.topics != id)
      });
    });
    console.log('Deleted product', this.SampleData);
    // this.employeService.deleteEmployee(this.empid).subscribe((deleteProductdata: any) => {
    //   {
    //     console.log('Deleted product', deleteProductdata);
    //     alert(deleteProductdata.message);
    //   }
    // })
  }
}
