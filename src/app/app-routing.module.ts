import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/Shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'employee', 
    loadChildren: () => import('src/Employee/employee/employee.module').then(m => m.EmployeeModule)
  },
  {path:'',redirectTo :'/employee',pathMatch:'full'},
  {path:'notfound/:status/:msg' ,component:NotFoundComponent},
  {path:'**' ,redirectTo:'/employee'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
