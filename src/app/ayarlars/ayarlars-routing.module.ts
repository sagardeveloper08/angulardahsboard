import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AktivlerComponent } from './aktivler/aktivler.component';
import { AyarListComponent } from './ayar-list/ayar-list.component';
import { BolmeComponent } from './bolme/bolme.component';
import { HesabComponent } from './hesab/hesab.component';
import { MaddeComponent } from './madde/madde.component';
import { MushteriComponent } from './mushteri/mushteri.component';
import { ShirketComponent } from './shirket/shirket.component';
import { TiplerComponent } from './tipler/tipler.component';
import { VahidComponent } from './vahid/vahid.component';
import { ValyutaComponent } from './valyuta/valyuta.component';
import { VergikodComponent } from './vergikod/vergikod.component';

const routes: Routes = [
  { 
    path: '', component:AyarListComponent ,
    children:[
       { path: 'hesablar', component: HesabComponent },
        { path: 'aktivler', component: AktivlerComponent },   
        { path: 'mushderiler', component: MushteriComponent },
        { path: 'shirketimiz', component: ShirketComponent },        
        { path: 'vergikod', component: VergikodComponent },
        { path: 'vahidler', component: VahidComponent }, 
        { path: 'valyuta', component: ValyutaComponent },
        { path: 'tipler', component: TiplerComponent },
        { path: 'bolme', component: BolmeComponent },
        { path: 'madde', component: MaddeComponent },
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyarlarsRoutingModule { }
