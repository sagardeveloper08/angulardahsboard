import { Component,  OnInit } from '@angular/core';
import { ExemService } from 'src/app/services/exem.service';
import { NotificationService } from 'src/app/helpers/notification.service';
import { _exam, _question } from 'src/app/models/exem';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getIsAdmin } from '../../auth/store/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-netice',
  templateUrl: './netice.component.html',
  styleUrls: ['./netice.component.scss']
})
export class NeticeComponent implements OnInit {  
  isAdmin: Observable<boolean>;
  ii_:number=0;
  name:any;
  _date : any;
  _email: _exam[];_sub:any;
  listexe:any[] ; 
  listque: []; 
 
  constructor(private _store: Store<AppState>,
    private _quSer: ExemService, private noti: NotificationService) {
      this.isAdmin = this._store.select(getIsAdmin);
  //  this._store.select(getemail).subscribe(k=>{ this.name=k; })
  }   
  ngOnInit(): void { 
     this._quSer._getemail().subscribe(p=>{    this._email=p;  })   
}
  selemai(sel:any){ this.name=sel;}
  _Dates(){
   // console.log(this.name);
    if(this._date!=undefined){
     // console.log(this._date);
      var w={ userId:this.name, quId:0,  rating:0, examdate: this._date, descrip:'yazdi',  ex_hiden:false  }     
     this._quSer._get_examdet(w).subscribe(p=>{ this.listexe=p; 
       console.log(p); //console.log('kam');
      })   

     this._quSer._get_examsum(this._date).subscribe(p=>{
      this.listque= p;   
      console.log(p); 
       }) 


        if(this.listexe !=null){ this.noti.success(":: success")}
        else{ this.noti.warn(":: yoxdur")}
    }        
  }
 
}
