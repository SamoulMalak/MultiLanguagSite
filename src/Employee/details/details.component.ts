import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/Models/iemployee';
import { EmployeeService } from 'src/Services/employee.service';
import { SetDirection } from 'src/language/language.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  Id: number = 0;
  EmployeeItem: IEmployee | undefined = {} as IEmployee;
  pageDirection =SetDirection();
  constructor(private employeeService: EmployeeService,
            private Ac: ActivatedRoute) 
  {
    this.GetIdFromUrl();
    this.GetDetails();
  }

  GetIdFromUrl() {
    this.Id = Number(this.Ac.snapshot.paramMap.get('id'));
  }

  GetDetails() {
    this.EmployeeItem = this.employeeService.Details(this.Id);
  }
}
