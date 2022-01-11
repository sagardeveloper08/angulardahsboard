import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { Lang } from 'src/models/_carts';
import { _desen } from 'src/models/_settings';
import { SettingsService } from 'src/services/settings.service';

@Component({
  selector: 'app-desen',
  templateUrl: './desen.component.html',
  styleUrls: ['./desen.component.scss']
})
export class DesenComponent implements OnInit {
  desForm: FormGroup; 
  listdes:_desen[] = []; 
  filtereddes: _desen[];
  des:_desen=new _desen(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _des: _desen[];  _pid:'';
  
  constructor(private _caSer: SettingsService,
     private notificationService: NotificationService) {
     this.des.desId="";
   }

   ngOnInit(): void {
    this.desForm = new FormGroup({  
     // firma_id: new FormControl('', [Validators.required,Validators.maxLength(36)]),   
     desname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
  
        
    });  
      //this._caSer._getfirma().subscribe( p=>{ this._page=p;console.log(p)});  
      this._caSer._getitemdesen().subscribe(list=>
        { 
           this.listdes=list; 
           this.filtereddes = this.listdes; 
           //console.log(this.listdes)                        
        }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    }

get desenname() { return this.desForm.get('desenname'); }

langu(lan:any){  this._lan=lan; }
  _adddes()
  {
    this.des.desId='';   
    this.des.desname=''; 
   
  }
  _cline(){ 
    this.desForm = new FormGroup({  
       
      desenId: new FormControl(''),
      desenname: new FormControl(''),
    
      });
     
   }
   _editdes(ca:_desen){ 
    //console.log('12111')   
    // console.log(ca)  
       this.des.desId=ca.desId;
       this.des.desname=ca.desname;//this._page.find(x=>x.pid==ca.pId).pagename;
      // this.fir.firma_telefon=ca.firma_telefon; 
      // this.fir.firma_unvan=ca.firma_unvan;
      // this.fir.voen=ca.voen,
      // this.fir.firma_email=this._storage.getemail();
      // this.fir.userId=this._storage.getId();      
     }
 onadd()
  { 
    if(this.desForm.valid)  
    {
       //console.log('333')
      // console.log(this.firForm.value)
       var p={
        desId:this.des.desId  ,
        desname:this.desForm.value.desname,
        //firma_telefon:this.firForm.value.firma_telefon,
        //firma_unvan:this.firForm.value.firma_unvan,
        //voen:this.firForm.value.voen,
        //firma_email:this._storage.getemail(),
       // userId:this._storage.getId()
      
      }
      //  console.log(p)
       this._caSer._positemdesen(p).subscribe();  
       //this._yenile(); 
       this._adddes(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                
                     
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delitemdesen(this.des).subscribe();  
       // this._yenile();
  } 
}
