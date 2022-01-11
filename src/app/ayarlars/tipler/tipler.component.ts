import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { tipleri } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { Lang } from 'src/models/_carts';

@Component({
  selector: 'app-tipler',
  templateUrl: './tipler.component.html',
  styleUrls: ['./tipler.component.scss']
})
export class TiplerComponent implements OnInit {
 
  tipForm: FormGroup; 
  listtip:tipleri[] = [];
  filteredtip: tipleri[];
  tip:tipleri=new tipleri(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _tip: tipleri[];  _pid:'';
  
  constructor( private _caSer: AyarlarService,
     private notificationService: NotificationService) {
     this.tip.tipId="";
   }

   ngOnInit(): void {
    this.tipForm = new FormGroup({  
       tipId: new FormControl('', [Validators.required,Validators.maxLength(36)]),   
       tipName: new FormControl('', [Validators.required,Validators.maxLength(50)])
        
    });  
     
      this._caSer._gettip().subscribe(list=>
      {         
           this.listtip=list; 
           this.filteredtip = this.listtip; 
          // console.log(this.listtip)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addtip()
  {
    this.tip.tipId='';   
    this.tip.tipName='';        
  }
  _cline(){ 
    this.tipForm = new FormGroup({  
       
      tipId: new FormControl(''),
      tipName: new FormControl('')
      });
     
   }
   _edittip(ca:tipleri){       
       this.tip.tipId = ca.tipId;
       this.tip.tipName = ca.tipName;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.tipForm.valid)  
    {
       var p={
        tipId:this.tip.tipId  ,
        tipName:this.tipForm.value.tipName
      
      }
      //  console.log(p)
       this._caSer._postip(p).subscribe();        
       this._addtip(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._deltip(this.tip).subscribe();         
  } 
 
}
