import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { madde } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-madde',
  templateUrl: './madde.component.html',
  styleUrls: ['./madde.component.scss']
})
export class MaddeComponent implements OnInit {
  maddeForm: FormGroup; 
  listmadde:madde[] = [];
  filteredmadde: madde[];
  madde:madde=new madde(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _madde: madde[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.madde.mId="";
   }

   ngOnInit(): void {
    this.maddeForm = new FormGroup({  
       maddeId: new FormControl(''),   
       maddeName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getmadde().subscribe(list=>
      {         
           this.listmadde=list; 
           this.filteredmadde= this.listmadde; 
         //  console.log('ZZZZ')
         //  console.log(this.listmadde)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addmadde()
  {
    this.madde.mId='';   
    this.madde.maddeName='';  
   // this.madde.description='';      
  }
  _cline(){ 
    this.maddeForm = new FormGroup({         
      mId: new FormControl(''),
      maddeName: new FormControl(''),
      //description: new FormControl('')
      });
     
   }
   _editmadde(ca:madde){       
       this.madde.mId = ca.mId;
       this.madde.maddeName = ca.maddeName;
       //this.madde.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.maddeForm.valid)  
    {
       var p={
        mId:this.madde.mId  ,
        maddeName:this.maddeForm.value.maddeName,
       // description:this.maddeForm.value.description
      }
      //  console.log(p)
       this._caSer._posmadde(p).subscribe();        
       this._addmadde(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delmadde(this.madde).subscribe();         
  } 


}
