import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ProductsModule } from './products/products.module';
import { ManageModule } from './manage/manage.module';
import { SettingModule } from './setting/setting.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TestModule } from './test/test.module';
import { authInterceptorProviders } from 'src/helpers/jwt.interceptor';
import { AyarlarsModule } from './ayarlars/ayarlars.module';

// import { MDBmaterialModule } from 'src/mdbmaterial/mdbmaterial.module';
// import { MaterialModule } from 'src/material/material.module';
// import { Map1Component } from './views/maps/map1/map1.component';
// import { ModalsComponent } from './views/modals/modals.component';
// import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
// import { Profile1Component } from './views/profile/profile1/profile1.component';
// import { NotFoundComponent } from './views/errors/not-found/not-found.component';
// import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
// import { RouterModule, Route } from '@angular/router';
//import { SharedModule } from './shared/shared.module';
//import { ErrorModule } from './views/errors/error.module';
// main layout
//import { NavigationModule } from './main-layout/navigation/navigation.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    FormsModule,    
    ViewsModule,   
    ReactiveFormsModule,
    AdminModule,
    AuthModule,
    ProductsModule,
    AyarlarsModule,
    TestModule, 
    ManageModule,
    SettingModule,

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),    
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
