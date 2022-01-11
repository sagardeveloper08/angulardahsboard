import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { aktivi } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-aktivler',
  templateUrl: './aktivler.component.html',
  styleUrls: ['./aktivler.component.scss']
})
export class AktivlerComponent implements OnInit {
  activForm: FormGroup; 
  listactiv:aktivi[] = [];
  filteredactiv: aktivi[];
  activ:aktivi=new aktivi(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _activ: aktivi[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.activ.activId="";
   }

   ngOnInit(): void {
    this.activForm = new FormGroup({  
       activId: new FormControl(''),   
       activName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getaktiv().subscribe(list=>
      {         
           this.listactiv=list; 
           this.filteredactiv= this.listactiv; 
         //  console.log('ZZZZ')
         //  console.log(this.listactiv)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addactiv()
  {
    this.activ.activId='';   
    this.activ.activName='';  
    this.activ.description='';      
  }
  _cline(){ 
    this.activForm = new FormGroup({  
       
      activId: new FormControl(''),
      activName: new FormControl(''),
      description: new FormControl('')
      });
     
   }
   _editactiv(ca:aktivi){       
       this.activ.activId = ca.activId;
       this.activ.activName = ca.activName;
       this.activ.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.activForm.valid)  
    {
       var p={
        activId:this.activ.activId  ,
        activName:this.activForm.value.activName,
        description:this.activForm.value.description
      }
      //  console.log(p)
       this._caSer._postaktiv(p).subscribe();        
       this._addactiv(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delaktiv(this.activ).subscribe();         
  } 

}
