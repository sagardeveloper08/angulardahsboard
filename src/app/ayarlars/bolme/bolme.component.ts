import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { bolme } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-bolme',
  templateUrl: './bolme.component.html',
  styleUrls: ['./bolme.component.scss']
})
export class BolmeComponent implements OnInit {

  bolmeForm: FormGroup; 
  listbolme: bolme[] = [];
  filteredbolme:  bolme[];
  bolme: bolme=new  bolme(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _bolme:  bolme[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.bolme.bId="";
   }

   ngOnInit(): void {
    this.bolmeForm = new FormGroup({  
       bolmeId: new FormControl(''),   
       bolmeName: new FormControl('', [Validators.required,Validators.maxLength(50)])
      // description: new FormControl('')
    });  
     
      this._caSer._getbolme().subscribe(list=>
      {         
           this.listbolme=list; 
           this.filteredbolme= this.listbolme; 
         //  console.log('ZZZZ')
           console.log(this.listbolme)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addbolme()
  {
    this.bolme.bId='';   
    this.bolme.bolmeName='';  
   // this.bolme.description='';      
  }
  _cline(){ 
    this.bolmeForm = new FormGroup({  
       
      bolmeId: new FormControl(''),
      bolmeName: new FormControl(''),
     // description: new FormControl('')
      });
     
   }
   _editbolme(ca: bolme){       
       this.bolme.bId = ca.bId;
       this.bolme.bolmeName = ca.bolmeName;
      // this.bolme.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.bolmeForm.valid)  
    {
       var p={
        bId:this.bolme.bId  ,
        bolmeName:this.bolmeForm.value.bolmeName
      //  description:this.bolmeForm.value.description
      }
      //  console.log(p)
       this._caSer._postbolme(p).subscribe();        
       this._addbolme(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delbolme(this.bolme).subscribe();         
  } 


}
