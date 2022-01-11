import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestListComponent } from './test-list/test-list.component';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { MDBmaterialModule } from 'src/mdbmaterial/mdbmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material/material.module';

import { TabserchComponent } from './tabserch/tabserch.component';
import { NgbdSortableHeader } from './tabserch/sortable.directive';
//import { CountryService } from './tabserch/country.service';


@NgModule({
  declarations: [ TestListComponent, T1Component, T2Component, TabserchComponent,NgbdSortableHeader],
  imports: [
    CommonModule,
    TestRoutingModule,
    MDBmaterialModule,
    MaterialModule,
    HttpClientModule,
  //  CountryService
  ],
  exports: [TabserchComponent],
  bootstrap: [TabserchComponent]
})
export class TestModule { }
