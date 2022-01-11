import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { bolme, hesab, madde, tipleri } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-hesab',
  templateUrl: './hesab.component.html',
  styleUrls: ['./hesab.component.scss']
})
export class HesabComponent implements OnInit {

  hesabForm: FormGroup; 
  listtip:tipleri[] = [];
  _tip: tipleri[];
  listbolme: bolme[] = [];
  _bolme:  bolme[];
  listmadde:madde[] = [];
  _madde: madde[];
  //------------------------------
  listhesab:hesab[] = [];
  filteredhesab: hesab[];
  hesab:hesab=new hesab(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _hesab: hesab[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.hesab.hesId="";
   }

   ngOnInit(): void {
    this.hesabForm = new FormGroup({  
      bId: new FormControl(''), 
      hesId: new FormControl(''),   
      hesname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      hesnom: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      mId: new FormControl('', [Validators.required]),
      tipId: new FormControl('')
    });      
    this._caSer._gethesab().subscribe(list=>
      {         
           this.listhesab=list; 
           this.filteredhesab= this.listhesab; 
          // console.log(this.listhesab)                        
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._gettip().subscribe(list=>
        {         
             this.listtip=list;   
            // console.log(this.listtip)                                  
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
    this._caSer._getmadde().subscribe(list=>
       {         
            this.listmadde=list;                                    
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getbolme().subscribe(list=>
       {         
                 this.listbolme=list;                                     
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addhesab()
  {
    this.hesab.bId='';   
    this.hesab.hesId='';  
    this.hesab.hesname='';  
    this.hesab.hesnom=''; 
    this.hesab.mId='';    
    this.hesab.tipId=''; 
    this.hesab.activId='';          
  }
  _cline(){ 
    this.hesabForm = new FormGroup({  
       
      bId: new FormControl(''),
      hesId: new FormControl(''),
      hesname: new FormControl(''),
      hesnom: new FormControl(''),
      mId: new FormControl(''),
      tipId: new FormControl(''),
      activId: new FormControl(''),
      });
     
   }
   _edithesab(ca:hesab){   
      this.hesab.bId =this.listbolme.find(x=>x.bId==ca.bId)!.bolmeName; 
      this.hesab.hesId = ca.hesId;
      this.hesab.hesname= ca.hesname;
      this.hesab.hesnom = ca.hesnom;
      this.hesab.mId =this.listmadde.find(x=>x.mId==ca.mId)!.maddeName;
      this.hesab.tipId =this.listtip.find(x=>x.tipId==ca.tipId)!.tipName;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.hesabForm.valid)  
    {
       var p={
        bId:this.hesab.bId  ,
        hesId:this.hesabForm.value.hesId,
        hesname:this.hesabForm.value.hesname,
        hesnom:this.hesabForm.value.hesnom,
        mId:this.hesabForm.value.mId,
        tipId:this.hesabForm.value.tipId,
        activId:this.hesabForm.value.activId
      }
      //  console.log(p)
       this._caSer._poshesab(p).subscribe();   

       this._addhesab(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delhesab(this.hesab).subscribe();         
  } 

}
