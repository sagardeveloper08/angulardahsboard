import { NgModule } from "@angular/core";
import { PreloadAllModules,  RouterModule, Route } from "@angular/router";
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from "./views/profile/profile1/profile1.component";
import { BasicTableComponent } from "./views/tables/basic-table/basic-table.component";
import { Map1Component } from "./views/maps/map1/map1.component";
import { ModalsComponent } from "./views/modals/modals.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { RegisterComponent } from "./auth/component/register/register.component";
import { LoginComponent } from "./auth/component/login/login.component";


const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
    { path: 'dashboards', children: [{ path: 'v1', component: Dashboard1Component },]  },
    { path: 'profiles', children:[ { path: 'profile1', component: Profile1Component }, ] },
    { path: 'tables', children:[ { path: 'table1', component: BasicTableComponent }, ]},
    { path: 'maps', children:  [{ path: 'map1', component: Map1Component}, ] },    
    { path: 'modals', component: ModalsComponent},
    
    { path: 'test', loadChildren:'./test/test.module#TestModule'},
    { path: 'ayarlars', loadChildren:'./ayarlars/ayarlars.module#AyarlarsModule'},

    { path: 'products', loadChildren:'./products/products.module#ProductsModule'}, 
    { path: 'admin', loadChildren:'./admin/admin.module#AdminModule', canActivate: [AuthGuard] } ,
    { path: 'manage', loadChildren:'./manage/manage.module#ManageModule',canActivate: [AuthGuard] }, 
    { path: 'setting', loadChildren:'./setting/setting.module#SettingModule', canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotFoundComponent },
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }