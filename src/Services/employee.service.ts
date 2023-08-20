import { Injectable } from '@angular/core';
import { IEmployee } from 'src/Models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  Employees : IEmployee[]=[] ;
  constructor() 
  { 
    this.Employees =[
      {
        Id:1,
        Name : 'Bola',
        Address:'Elminia',
        Email:'Bola@Bola.com',
        Title:'Full Stack Developer ',
        Salary:1000,
        ExperienceYears:1

      },
      {
        Id:2,
        Name : 'Ahmed',
        Address:'Cairo',
        Email:'Ahmed@Ahmed.com',
        Title:'Front-End Developer',
        Salary:15000,
        ExperienceYears:2

      },
      {
        Id:3,
        Name : 'Romany',
        Address:'Alexandria',
        Email:'Romany@Romany.net',
        Title:'Embedded System Engineer',
        Salary:20000,
        ExperienceYears:2

      }
    ];
  }

 AllEmployees() : IEmployee[]
 {
  return this.Employees;
 }

 AddEmployee(item : IEmployee) 
 {
 this.Employees.push(item);
 console.log('push sucesses');

 console.log(this.Employees);
 }

 EditEmployee(Item : IEmployee)
 {
    let newEmployee =this.FindEmployeeById(Item.Id);
    newEmployee!.Name=Item.Name;
    newEmployee!.Email=Item.Email;
    newEmployee!.Address=Item.Address;
    newEmployee!.Title=Item.Title;
    newEmployee!.Salary=Item.Salary;
    newEmployee!.ExperienceYears=Item.ExperienceYears;
 }

 Details(id :number) : IEmployee |undefined
 {
 return this.Employees.find(e=>e.Id === id);
 }

 FindEmployeeById(id :number) : IEmployee |undefined
 {
   return this.Employees.find(e=>e.Id === id);
 }

 DeleteEmployee(id :number)
 {
   this.Employees.splice(id,1);
 }

 GetLastId():number
 {
   return this.Employees.length + 1;
 }



}
