import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { valyuta } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-valyuta',
  templateUrl: './valyuta.component.html',
  styleUrls: ['./valyuta.component.scss']
})
export class ValyutaComponent implements OnInit {

  valyutaForm: FormGroup; 
  listvalyuta:valyuta[] = [];
  filteredvalyuta: valyuta[];
  valyuta:valyuta=new valyuta(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _valyuta: valyuta[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.valyuta.valId="";
   }

   ngOnInit(): void {
    this.valyutaForm = new FormGroup({  
       valId: new FormControl(''),   
       valname: new FormControl('', [Validators.required]),
       valnominal: new FormControl(0, [Validators.required]),
      // description: new FormControl('')
    });  
     
      this._caSer._getvalyuta().subscribe(list=>
      {         
           this.listvalyuta=list; 
           this.filteredvalyuta= this.listvalyuta; 
           console.log(this.listvalyuta)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addvalyuta()
  {
    this.valyuta.valId='';   
    this.valyuta.valname='';  
    this.valyuta.valnominal=0;  
    this.valyuta.tarix=undefined;      
  }
  _cline(){ 
    this.valyutaForm = new FormGroup({  
       
      vId: new FormControl(''),
      valname: new FormControl(''),
      valnominal: new FormControl(0)
      });
     
   }
   _editvalyuta(ca:valyuta){       
       this.valyuta.valId = ca.valId;
       this.valyuta.valname= ca.valname;
       this.valyuta.valnominal = ca.valnominal;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.valyutaForm.valid)  
    {
       this.valyutaForm.value.valnominal
       var p={
        valId:this.valyuta.valId  ,
        valname:this.valyutaForm.value.valname,
        valnominal: this.valyutaForm.value.valnominal,
        tarix:undefined
      }
      //  console.log(p)
       this._caSer._postvalyuta(p).subscribe();   

       this._addvalyuta(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._deletevalyuta(this.valyuta).subscribe();         
  } 
}
