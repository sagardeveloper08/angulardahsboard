import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { TabserchComponent } from './tabserch/tabserch.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  { 
    path: '', component:TestListComponent ,
    children:[
       { path: 't1', component: T1Component },
       { path: 't2', component: T2Component },   
       { path: 'tabserch', component: TabserchComponent },     
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
