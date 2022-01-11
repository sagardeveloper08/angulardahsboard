import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { mushteri } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-mushteri',
  templateUrl: './mushteri.component.html',
  styleUrls: ['./mushteri.component.scss']
})
export class MushteriComponent implements OnInit {
  mushteriForm: FormGroup; 
  listmushteri:mushteri[] = [];
  filteredmushteri: mushteri[];
  mushteri:mushteri=new mushteri(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _mushteri: mushteri[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.mushteri.mushId="";
   }

   ngOnInit(): void {
    this.mushteriForm = new FormGroup({  
       mushId: new FormControl(''), 
       firma: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       voen: new FormControl(0, ),  
       muqavilenom: new FormControl('', [Validators.required,Validators.maxLength(10)]),
       muqaviletar: new FormControl(Date,[Validators.required]),
       valyuta: new FormControl('', [Validators.required,Validators.maxLength(10)]),
       odemesherti: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       temsilchi: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    });  
    
      this._caSer._getmushteri().subscribe(list=>
      {         
           this.listmushteri=list; 
           this.filteredmushteri= this.listmushteri; 
           console.log(this.listmushteri)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addmushteri() {
     this.mushteri.mushId='';  
    this.mushteri.firma='';  
    this.mushteri.voen=''; 
    this.mushteri.muqavilenom=''; 
    this.mushteri.muqaviletar=undefined;  
    this.mushteri.valyuta='';  
    this.mushteri.odemesherti=''; 
    this.mushteri.temsilchi='';    
  }
  _cline(){ 
    this.mushteriForm = new FormGroup({      
      
    mushId: new FormControl(''), 
    firma: new FormControl(''),
    voen: new FormControl(''),
    muqavilenom: new FormControl(''), 
    muqaviletar: new FormControl(''), 
    valyuta: new FormControl(''),
    odemesherti: new FormControl(''),
    temsilchi: new FormControl('')
      });
     
   }
   _editmushteri(ca:mushteri){       
       
       this.mushteri.mushId = ca.mushId;
       this.mushteri.firma = ca.firma;
       this.mushteri.voen = ca.voen;
       this.mushteri.muqavilenom = ca.muqavilenom;
       this.mushteri.muqaviletar = ca.muqaviletar;
       this.mushteri.valyuta = ca.valyuta;
       this.mushteri.odemesherti = ca.odemesherti;
       this.mushteri.temsilchi = ca.temsilchi;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.mushteriForm.valid)  
    {
       var p={
        mushId:this.mushteri.mushId  ,
        firma:this.mushteriForm.value.firma,
        voen:this.mushteriForm.value.voen,
        muqavilenom:this.mushteriForm.value.muqavilenom,
        muqaviletar:this.mushteriForm.value.muqaviletar,
        valyuta:this.mushteriForm.value.valyuta,
        odemesherti:this.mushteriForm.value.odemesherti,
        temsilchi:this.mushteriForm.value.temsilchi
      }
      //  console.log(p)
       this._caSer._posmushteri(p).subscribe();        
       this._addmushteri(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delmushteri(this.mushteri).subscribe();         
  } 

}
