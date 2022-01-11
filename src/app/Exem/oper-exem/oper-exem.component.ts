import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/helpers/notification.service';
import { _question, _subject } from 'src/app/models/exem';
import { ExemService } from 'src/app/services/exem.service';

@Component({
  selector: 'app-oper-exem',
  templateUrl: './oper-exem.component.html',
  styleUrls: ['./oper-exem.component.scss']
})
export class OperExemComponent implements OnInit {
  //navForm: FormGroup; 
  //nav:MenuItem=new MenuItem();
  //listnav:MenuItem[] = []; 
  //filterednav: MenuItem[];
  queForm: FormGroup;
  que:_question=new _question();   
  listque:_question[] = [];    
  filteredque: _question[];  
  _subce: _subject[];_sub:any; _ansId1:boolean=false;_ansId2:boolean=false;_ansId3:boolean=false;_ansId4:boolean=false;
  //_page: any[];
  constructor(private _quSer: ExemService,
    private noti: NotificationService
    ) { }

  ngOnInit(): void {
  // this. _subce=[{subId: 1, subname: 'C#',descrip:''},{subId: 2, subname: 'Java',descrip:''} ];
    
    this._quSer._getsubjects().subscribe(p=>{   this._subce=p;  })
   
    this.queForm = new FormGroup({  
      questin: new FormControl('', [Validators.required]),   
      a_answer: new FormControl('', [Validators.required]),
      b_answer: new FormControl('', [Validators.required]),
      c_answer: new FormControl(' '),  
      d_answer: new FormControl(' '),
      ansId:    new FormControl('' , [Validators.required] ),
      subId: new FormControl('' , [Validators.required] ),
   
    });
    this._yenile();  
  }
  _yenile()
  {
   // console.log('xxxxxxxxx')
    this._quSer._getquestions().subscribe(p=>{          
      this.listque=p;
     
      //console.log(p)
      this.filteredque = this.listque; 
      //this._page=this.listque;
     // this._page = this._page.filter(f=>f.pid===null && f.nisparent===true) 
     })
  }
  selsub(sel:any){ this._sub=sel;}
  _addque()
  {
   // this.que.quId=0;    
    this.que.questin='';
    this.que.a_answer='';
    this.que.b_answer='';
    this.que.c_answer='';
    this.que.d_answer='';
    this.que.subId='';
    this.que.qu_hiden=false;
    this._ansId1=this._ansId2=this._ansId3=this._ansId4=false;
  }
  _cline(){ 
    this.queForm = new FormGroup({  
      questin: new FormControl('', [Validators.required]),   
      a_answer: new FormControl(''),
      b_answer: new FormControl(''),
      c_answer: new FormControl(' '),  
      d_answer: new FormControl(' '),
      ansId:    new FormControl(''  ),
      subId: new FormControl(''  ),
      });       
   }
   
   onadd()
  { 
    if(this.queForm.valid)  
    {
     console.log(this.queForm.value+'kam')
       var p={       
       //name:''  ,
        quId:this.que.quId,
        questin:this.queForm.value.questin,
        a_answer:this.queForm.value.a_answer,
        b_answer:this.queForm.value.b_answer,
        c_answer:this.queForm.value.c_answer,
        d_answer:this.queForm.value.d_answer,
        ansId:this.queForm.value.ansId,
        subId:this._sub  ,
        qu_hiden:false  
                
      }
       console.log(p)
       this._quSer._posques(p).subscribe();  
       this._yenile(); 
      // this._addfir(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                      
    } 
      
  }
  _editque(ca:_question){ 

    if(ca.subId===null){} 
        else {          
         this.que.subId=this._subce.find(x=>x.subId.toString()==ca.subId)!.subname;  
         // console.log( this.que.subId)        
        }         
    
      this.que.quId=ca.quId;    
      this.que.questin=ca.questin;
      this.que.a_answer=ca.a_answer; 
      this.que.b_answer=ca.b_answer;
      this.que.c_answer=ca.c_answer;
      this.que.d_answer=ca.d_answer;
      this.que.subId=ca.subId;
      this.que.qu_hiden=ca.qu_hiden;
      this.que.ansId=ca.ansId;
      if(ca.ansId===1){this._ansId1=true;}
      else if(ca.ansId===2){this._ansId2=true;}
      else if(ca.ansId===3){this._ansId3=true;}
      else if(ca.ansId===4){this._ansId4=true;}
       //console.log( ca.ansId)   
    }
    ondel(){
      
    }

}
