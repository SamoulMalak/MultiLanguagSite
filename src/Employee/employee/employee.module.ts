import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { DetailsComponent } from '../details/details.component';

import { TranslateModule } from '@ngx-translate/core';
import { UpdateComponent } from '../update/update.component';



const routes :Routes =[
  {path:'' ,redirectTo :'home' ,pathMatch :'full'},
  {path:'home' ,component: HomeComponent},
  {path:'create' ,component: CreateComponent},
  {path:'details/:id' ,component: DetailsComponent},
  {path:'update/:id' ,component: UpdateComponent},
  {path:'**' ,component:HomeComponent}
  
];
@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    TranslateModule.forChild()
  
   
  ]
})

export class EmployeeModule 
{

}
