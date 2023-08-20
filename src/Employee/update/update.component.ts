import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/Models/iemployee';
import { EmployeeService } from 'src/Services/employee.service';
import { SetDirection } from 'src/language/language.module';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit {

  EmployeeId :number= 0;
  Employee :IEmployee ={} as IEmployee;
  EmployeeForm : FormGroup;
  pageDirection =SetDirection();
  constructor(private Ac :ActivatedRoute,
             private employeeService :EmployeeService,
             private router:Router)
 {
  

  this.EmployeeForm = new FormGroup({
    Id: new FormControl(''),
    Name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    Email: new FormControl('', [Validators.required]),
    Title: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    Salary: new FormControl('', [Validators.required]),
    ExperienceYears: new FormControl('', [Validators.required])
  });
    
 }
  ngOnInit(): void
  {
    this.GetIdFromUrl();
    this.GetEmployeeOfCurrentId();
  }

 get Id ()
 {
   return this.EmployeeForm.controls['Id'];
 }
get Name ()
 {
   return this.EmployeeForm.controls['Name'];
 }
 get Email ()
 {
   return this.EmployeeForm.controls['Email'];
 }
 get Title ()
 {
   return this.EmployeeForm.controls['Title'];
 }
 get Address ()
 {
   return this.EmployeeForm.controls['Address'];
 }
 get Salary ()
 {
   return this.EmployeeForm.controls['Salary'];
 }
 get ExperienceYears ()
 {
   return this.EmployeeForm.controls['ExperienceYears'];
 }

 GetIdFromUrl()
 {
    this.EmployeeId= Number(this.Ac.snapshot.paramMap.get('id'));
 }


 // this function get employee that is id sent in the url
 // no need to pass to this function id parameter

 GetEmployeeOfCurrentId()
 {
  let item =this.employeeService.FindEmployeeById(this.EmployeeId);
  if(typeof(item)!='undefined')
  {
   this.Employee = item;
   this.SetInitialDataIntoForm();
  }
  else
  {

  }
 }


 SetInitialDataIntoForm()
 {
  this.EmployeeForm.setValue(
    {
      Id: this.Employee.Id,
      Name:this.Employee.Name,
      Title:this.Employee.Title,
      Email:this.Employee.Email,
      Address : this.Employee.Address,
      Salary : this.Employee.Salary,
      ExperienceYears : this.Employee.ExperienceYears,


    }
  )
 }
 UpdateEmployee()
 {
   this.employeeService.EditEmployee(this.EmployeeForm.value);
   this.router.navigate(['/employee/details',this.EmployeeId]);
 }

}
