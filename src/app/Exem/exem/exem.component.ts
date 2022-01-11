import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/helpers/notification.service';
import { _exam, _question, _subject } from 'src/app/models/exem';
import { AppState } from 'src/app/reducers';
import { ExemService } from 'src/app/services/exem.service';
import { getemail } from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-exem',
  templateUrl: './exem.component.html',
  styleUrls: ['./exem.component.scss']
})
export class ExemComponent implements OnInit {
  quesForm: FormGroup;
  name:any;
  listfir:_question[] = []; 
  que:_question=new _question(); 
  exe:_exam=new _exam();
  _subce: _subject[];_sub:any; subname: string;
  f:number=0;i_:number=0; ii_:number=this.f+1;
  date: Date;
  constructor(private _store: Store<AppState>,private _quSer: ExemService,private noti: NotificationService, private router: Router,) {
    this._store.select(getemail).subscribe(k=>{
      this.name=k;
       this.que.userId = k! ; })
   }

  ngOnInit(): void {   
    this.quesForm = new FormGroup({  
     // quId: new FormControl(''  ),
      questin: new FormControl('', [Validators.required]),   
      a_answer: new FormControl(''),
      b_answer: new FormControl(''),
      c_answer: new FormControl(' '),  
      d_answer: new FormControl(' '),
      ansId:    new FormControl('' ),
      subId: new FormControl('' , [Validators.required] ), 
      userId: new FormControl('' , [Validators.required] ),   
    });
    this._quSer._getsubjects().subscribe(p=>{   this._subce=p; 
     // this.subname=p[0].subname
      this.que.subId=p[0].subname
      //console.log(this.subname)
     })
    this._quSer._getquestions().subscribe(p=>{ 
      this.listfir=p;
     // console.log(p)
      this._bax(this.f);

    })  
  }
  selsub(sel:any){ this._sub=sel;}
  _bax(id:number){
    this.ii_=this.f+1
    this.listfir[id];
   //  console.log(this.listfir[id])
    this.i_=this.listfir[id].quId;
    this.que.questin=this.listfir[id].questin;
    this.que.a_answer=this.listfir[id].a_answer;
    this.que.b_answer=this.listfir[id].b_answer;
    this.que.c_answer=this.listfir[id].c_answer;
    this.que.d_answer=this.listfir[id].d_answer;
    this.que.ansId=this.listfir[id].ansId;
    this.subname=this.listfir[id].subId;
    this.que.userId=this.name;
    this._store.select(getemail).subscribe(k=>{ this.que.userId=k!; })
   // this.ii=this.listfir[id].subId;
   // console.log(this._subce[this.listfir[id].subId])
    
  }
  _cline(){ 
    this.quesForm = new FormGroup({  
     // quId: new FormControl(''  ),
      questin: new FormControl('', [Validators.required]),   
      a_answer: new FormControl(''),
      b_answer: new FormControl(''),
      c_answer: new FormControl(' '),  
      d_answer: new FormControl(' '),
      ansId:    new FormControl('' , [Validators.required] ),
      //subId: new FormControl('' , [Validators.required] ),
      });       
   }
   
  onireli():void{
   // console.log(this.f)

    if(this.f< this.listfir.length-1)
     {          
       // console.log(this.quesForm.value) 
           if(this.quesForm.value.ansId>0){
              var p={       
               userId:this.name,
               quId:this.i_,
               rating:this.quesForm.value.ansId,
               examdate: new Date().toISOString(),
               descrip:'yazdi',             
               ex_hiden:false                         
             }
            //console.log(this._quSer._Findexam(p).subscribe())
             let ee;
             this._quSer._Findexam(p).subscribe(p=>{ ee=p  })
             if(ee==null){//eger cavab vermeyibse
              console.log(p)
              this._quSer._posexam(p).subscribe();
              this.noti.success(":: success") 
            }    
            else {  //console.log('2222')
          }                    
            this._cline();
           }  
                  
           this._bax( ++ this.f);           
     }      
     //console.log(this.listfir.length)
  }
  ongeri():void{
   // console.log(this.f)
    if (this.f > 1)
    {
       // --this.f;
        this._bax(-- this.f);
    }   
  }  
  onnetice()
  {
    this.router.navigateByUrl('/exem/netice');
  }
}
