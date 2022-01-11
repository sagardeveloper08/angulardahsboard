import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { vahid } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-vahid',
  templateUrl: './vahid.component.html',
  styleUrls: ['./vahid.component.scss']
})
export class VahidComponent implements OnInit {

  vahidForm: FormGroup; 
  listvahid:vahid[] = [];
  filteredvahid: vahid[];
  vahid:vahid=new vahid(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _vahid: vahid[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.vahid.vId="";
   }

   ngOnInit(): void {
    this.vahidForm = new FormGroup({  
       vId: new FormControl(''),   
       vahidadi: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getvahid().subscribe(list=>
      {         
           this.listvahid=list; 
           this.filteredvahid= this.listvahid; 
          // console.log(this.listvahid)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addvahid()
  {
    this.vahid.vId='';   
    this.vahid.vahidadi='';  
  //  this.vahid.description='';      
  }
  _cline(){ 
    this.vahidForm = new FormGroup({  
       
      vId: new FormControl(''),
      vahidName: new FormControl(''),
     // description: new FormControl('')
      });
     
   }
   _editvahid(ca:vahid){       
       this.vahid.vId = ca.vId;
       this.vahid.vahidadi= ca.vahidadi;
     //  this.vahid.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.vahidForm.valid)  
    {
       var p={
        vId:this.vahid.vId  ,
        vahidadi:this.vahidForm.value.vahidadi,
        //description:this.vahidForm.value.description
      }
      //  console.log(p)
       this._caSer._postvahid(p).subscribe();        
       this._addvahid(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delvahid(this.vahid).subscribe();         
  } 

}
