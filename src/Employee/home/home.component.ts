import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { IEmployee } from 'src/Models/iemployee';
import { EmployeeService } from 'src/Services/employee.service';
import { SetDirection } from 'src/language/language.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  AllEmployees: IEmployee[] = [];
  pageDirection =SetDirection();
 
  constructor( private employeeService: EmployeeService,
               private route :Router,
               private translate:TranslateService)
  {

    this.AllEmployees=employeeService.AllEmployees();
  }

  Delete(id :number)
  {
    console.log("Enter Delete");
  const DeleteMsg="Are You Sure of Delete this item";
   let Confirmation = confirm(this.translate.instant(DeleteMsg));
   if (Confirmation)
   {
    console.log(Confirmation);
    console.log("Enter if");
   this.employeeService.DeleteEmployee(id);
   this.route.navigate(['/employee']);
   }
   else
   {
    console.log(Confirmation);

    const CancelMsg='This employee has not been deleted';
    alert(this.translate.instant(CancelMsg));
   }
  }

}
