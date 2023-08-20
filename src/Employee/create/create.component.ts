import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EmployeeService } from 'src/Services/employee.service';
import { SetDirection } from 'src/language/language.module';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  formGroup : FormGroup;
  GenerateNextId :number = 0;
  pageDirection =SetDirection();
  constructor(private employeeService : EmployeeService,
              private router :Router,
              private translateService :TranslateService)
   {
    
    this.GenerateNextId =employeeService.GetLastId();
 
    this.formGroup = new FormGroup({
      Id: new FormControl(''),
      Name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      Email: new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Salary: new FormControl('', [Validators.required]),
      ExperienceYears: new FormControl('', [Validators.required])
    });
  }
  
  get Id ()
  {
    return this.formGroup.controls['Id'];
  }
get Name ()
  {
    return this.formGroup.controls['Name'];
  }
  get Email ()
  {
    return this.formGroup.controls['Email'];
  }
  get Title ()
  {
    return this.formGroup.controls['Title'];
  }
  get Address ()
  {
    return this.formGroup.controls['Address'];
  }
  get Salary ()
  {
    return this.formGroup.controls['Salary'];
  }
  get ExperienceYears ()
  {
    return this.formGroup.controls['ExperienceYears'];
  }

  AddEmployee()
  {
    this.formGroup.controls['Id'].setValue(this.GenerateNextId);
   this.employeeService.AddEmployee(this.formGroup.value);
   console.log(this.formGroup.value);
  this.router.navigate(['/employee/details',this.GenerateNextId]);
  }
  
}
