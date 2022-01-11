import { Component, HostListener,  ViewChild,
  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { NotificationService } from 'src/helpers/notification.service';
import { vahid, vergi } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-vergikod',
  templateUrl: './vergikod.component.html',
  styleUrls: ['./vergikod.component.scss']
})
export class VergikodComponent implements OnInit {
  vergiForm: FormGroup;
  vergi:vergi=new vergi();   
  listvergi:vergi[] = []; 
  filteredvergi: vergi[];
  jsonlistvergi:vergi[]=[];
  listvahid:vahid[] = [];
  _vahid:vahid[];  
 
 // _subce: _subject[];_sub:any; _ansId1:boolean=false;_ansId2:boolean=false;_ansId3:boolean=false;_ansId4:boolean=false;
  constructor(private _quSer: AyarlarService, private noti: NotificationService ) { }
  //-------------serch
  @ViewChild(MdbTableDirective, {static: true}) mdbTable:MdbTableDirective;
   @HostListener('input') oninput() { this.searchItems();  }
   // elements: any = [];
    headElements = ['vergiId','vergikodu', 'vergikodununadi', 'vId','Actions'];
    searchText: string = '';
    previous: string; 

    searchItems() {
        const prev = this.mdbTable.getDataSource();
        if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.filteredvergi = this.mdbTable.getDataSource();
        }
        if (this.searchText) {
            this.filteredvergi = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['vergikodu','vergikodununadi']);
            this.mdbTable.setDataSource(prev);
        }
    }
  //--------------------------
  
  ngOnInit(): void {    
       
    this.vergiForm = new FormGroup({  
      vergiId: new FormControl(''),  
      vergikodununadi: new FormControl('', [Validators.required]),   
      vergikodu: new FormControl('', [Validators.required]),
      vId: new FormControl('', [Validators.required]),
      edv_tar: new FormControl('')  
    });
    this._quSer._getvergi().subscribe(list=>
      {         
           this.listvergi=list; 
           this.filteredvergi= this.listvergi; 
           this.mdbTable.setDataSource(this.filteredvergi);
           this.previous = this.mdbTable.getDataSource();
          //  console.log(this.mdbTable.getDataSource())                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
    this._quSer._getvahid().subscribe(list=>
        {         
             this.listvahid=list;                               
        }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));  
  }
  _addvergi()
  {
   // this.nav.nid='';
    this.vergi.vergiId='';
    this.vergi.vergikodu='';
    this.vergi.vergikodununadi='';
    this.vergi.vId='';
    this.vergi.edv_tar;   
  }
  _cline(){ 
    this.vergiForm = new FormGroup({  
      vergiId: new FormControl(''),  
      vergikodununadi: new FormControl(''),   
      vergikodu: new FormControl(''),
      vId: new FormControl('')  
    });
     
   }
   _editvergi(ve:vergi){       
    this.vergi.vergiId=ve.vergiId;
    this.vergi.vergikodu=ve.vergikodu;
    this.vergi.vergikodununadi=ve.vergikodununadi;
    this.vergi.vId=this.listvahid.find(x=>x.vId==ve.vId)!.vahidadi;
    this.vergi.edv_tar=ve.edv_tar;
  // console.log(ca)       
  } 

  onadd(){ 
    if(this.vergiForm.valid)  
    {
    // console.log(this.vergiForm.value.vergiId)
    // console.log(this.ver.vergiId)
       var p={          
        vergiId :this.vergi.vergiId, 
        vergikodu:this.vergiForm.value.vergikodu,
        vergikodununadi:this.vergiForm.value.vergikodununadi,
        vId:this.vergiForm.value.vId,
        edv_tar:this.vergiForm.value.edv_tar,
        STATE: ''       
      }
      // console.log(p)
      this._quSer._posvergi(p).subscribe();  
      this._addvergi(); 
       this._cline();   
       this.noti.success('::Submitted successfully');  
    } 
  }  
  ondel(){
    this.noti.warn('!Deleted successfully');     
    this._quSer._delvergi(this.vergi).subscribe();  
    
  }
   
  
}
