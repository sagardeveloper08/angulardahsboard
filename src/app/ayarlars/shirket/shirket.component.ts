import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { shirket } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-shirket',
  templateUrl: './shirket.component.html',
  styleUrls: ['./shirket.component.scss']
})
export class ShirketComponent implements OnInit {

  shirketForm: FormGroup; 
  listshirket:shirket[] = [];
  filteredshirket: shirket[];
  shirket:shirket=new shirket(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _shirket: shirket[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.shirket.shId="";
   }

   ngOnInit(): void {
    this.shirketForm = new FormGroup({  
       shId: new FormControl(''),   
       bankadi: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       bankvoen: new FormControl('',[Validators.required]),
       swift: new FormControl('',[Validators.required]),
       muxbirhesab: new FormControl('',[Validators.required]),
       bankkodu: new FormControl('',[Validators.required]),
       aznhesab: new FormControl('',[Validators.required]),
       shiricrachi: new FormControl('',[Validators.required]),
       shirvoen: new FormControl('',[Validators.required]),
       cavabdehshexs: new FormControl('',[Validators.required]),
       email: new FormControl('',[Validators.required]),
       unvan: new FormControl('',[Validators.required]),
       userId: new FormControl('',[Validators.required]),
    });  
    
      this._caSer._getshirket().subscribe(list=>
      {         
           this.listshirket=list; 
           this.filteredshirket= this.listshirket; 
           console.log(this.listshirket)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addshirket()
  {
    this.shirket.shId='';   
    this.shirket.bankadi='';  
    this.shirket.bankvoen=''; 
    this.shirket.swift='';  
    this.shirket.muxbirhesab=''; 
    this.shirket.bankkodu='';  
    this.shirket.aznhesab='';  
    this.shirket.shiricrachi=''; 
    this.shirket.shirvoen=''; 
    this.shirket.cavabdehshexs='';  
    this.shirket.email='';  
    this.shirket.unvan=''; 
    this.shirket.userId=''; 
    this.shirket.shirpercent=0;   
  }
  _cline(){ 
    this.shirketForm = new FormGroup({       
      shId: new FormControl(''),  
    bankadi: new FormControl(''), 
    bankvoen: new FormControl(''),
    swift: new FormControl(''), 
    muxbirhesab: new FormControl(''),
    bankkodu: new FormControl(''), 
    aznhesab: new FormControl(''), 

    shiricrachi: new FormControl(''),
    shirvoen: new FormControl(''),
    cavabdehshexs: new FormControl(''), 

    email: new FormControl(''), 
    unvan: new FormControl(''),
    userId: new FormControl(''),
    shirpercent: new FormControl(0)
      });
     
   }
   _editshirket(ca:shirket){       
       this.shirket.shId = ca.shId;
       this.shirket.bankadi= ca.bankadi;
       this.shirket.bankvoen = ca.bankvoen;
       this.shirket.swift = ca.swift;
       this.shirket.muxbirhesab = ca.muxbirhesab;
       this.shirket.bankkodu = ca.bankkodu;
       this.shirket.aznhesab = ca.aznhesab;

       this.shirket.shiricrachi = ca.shiricrachi;
       this.shirket.shirvoen = ca.shirvoen;
       this.shirket.cavabdehshexs = ca.cavabdehshexs;

       this.shirket.email = ca.email;
       this.shirket.unvan = ca.unvan;
       this.shirket.userId = ca.userId;
       this.shirket.shirpercent = ca.shirpercent;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.shirketForm.valid)  
    {
       var p={
        shId:this.shirket.shId  ,
        bankadi:this.shirketForm.value.bankadi,
        bankvoen:this.shirketForm.value.bankvoen,
        swift:this.shirketForm.value.swift,
        muxbirhesab:this.shirketForm.value.muxbirhesab,
        bankkodu:this.shirketForm.value.bankkodu,
        aznhesab:this.shirketForm.value.aznhesab,

        shiricrachi:this.shirketForm.value.shiricrachi,
        shirvoen:this.shirketForm.value.shirvoen,
        cavabdehshexs:this.shirketForm.value.cavabdehshexs,

        email:this.shirketForm.value.email,
        unvan:this.shirketForm.value.unvan,
        userId:this.shirketForm.value.userId,
        shirpercent:this.shirketForm.value.shirpercent
      }
      //  console.log(p)
       this._caSer._posshirket(p).subscribe();        
       this._addshirket(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delshirket(this.shirket).subscribe();         
  } 
}
