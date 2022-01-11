import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromAdmin from './store/admin.reducer';
import { StoreModule } from '@ngrx/store';
import { AdminsListComponent } from './containers/admins-list/admins-list.component';
import { AdminComponent } from './containers/admin/admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RoleListComponent } from './containers/role-list/role-list.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
//import { SharedModule } from 'src/app/views/shared/shared.module';
import { MDBmaterialModule } from 'src/mdbmaterial/mdbmaterial.module';

// import { CartListComponent } from './containers/cart-list/cart-list.component';
// import { AddPageComponent } from './containers/add-page/add-page.component';
// import { AddvideoComponent } from './containers/addvideo/addvideo.component';


// import { SharedModule } from '../shared/shared.module';
// import { MDBmaterialModule } from 'src/app/mdbmaterial/mdbmaterial.module';
// import { AdminEffects } from './store/admin.effects';
// import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [AdminsListComponent,AdminComponent,UsersListComponent,
     UserComponent, UserDetailComponent,RoleListComponent, NavbarComponent
         // CartListComponent, AddPageComponent, AddvideoComponent
        ],
  imports: [
    CommonModule,     
    AdminRoutingModule,
    MDBmaterialModule,
    HttpClientModule ,
    RouterModule,
    //SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('admin', fromAdmin.adminReducer),
   // EffectsModule.forFeature([AdminEffects])
  ],
  providers:[],schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
