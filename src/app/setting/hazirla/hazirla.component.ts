import { Component, OnInit } from '@angular/core';
import { beden, gender, _categoriy, _color, _desen, _marka, _materal,
  _stil, kullanimAlani, kumashtipi, qelip, qoltipi, yaka } from 'src/models/_settings';

import { flatMap} from 'rxjs/operators';

import { MenuItem } from 'src/models/_menu';
import { SettingsService } from 'src/services/settings.service';
//import { AuthService } from 'src/services/auth.service';
import { NotificationService } from 'src/helpers/notification.service';
import { NavbarService } from 'src/services/navbar.service';
import { aktivi, hesab, madde, mushteri, qrup, shirket, tipleri, vahid, verg, vergi } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { forkJoin, interval } from 'rxjs';
import { _ACTION_TYPE_UNIQUENESS_CHECK } from '@ngrx/store/src/tokens';

@Component({
  selector: 'app-hazirla',
  templateUrl: './hazirla.component.html',
  styleUrls: ['./hazirla.component.scss']
})
export class HazirlaComponent implements OnInit {
  //#region 
  _shomi:boolean=true;
  listnav:MenuItem[] = []; 
  jsonlistnav:MenuItem[] = [];
  listcol:_color[] = [];
  jsonlistcol:_color[] = [];
  listdes:_desen[] = []; 
  jsonlistdes:_desen[] = [];

  listmar:_marka[] = []; 
  jsonlistmar:_marka[] = [];   
  listmat:_materal[] = [];
  jsonlistmat:_materal[] = [];
  liststil:_stil[] = [];
  jsonliststil:_stil[] = [];
  listkul:kullanimAlani[] = [];
  jsonlistkul:kullanimAlani[] = [];
  listkum:kumashtipi[] = []; 
  jsonlistkum:kumashtipi[] = []; 
  listqel:qelip[] = [];
  jsonlistqel:qelip[] = [];
  _gender: gender[]=[];
  jsonlistgen:gender[] = [];

  listcat:_categoriy[] = [];
  jsonlistcat:_categoriy[] = [];   
  listqol:qoltipi[] = []; 
  jsonlistqol:qoltipi[] = [];  
  listyak:yaka[] = [];
  jsonlistyak:yaka[] = [];
  listbeden:beden[] = [];
  jsonlistbeden:beden[] = [];
  //Muhasibat
  listqrup: qrup[]=[];
  jsonlistqrup:qrup[] = [];
  listtip: tipleri[]=[];
  jsonlisttip:tipleri[] = [];
  listmadde: madde[]=[];
  jsonlistmadde:madde[] = [];
  listaktiv: aktivi[]=[];
  jsonlistaktiv:aktivi[] = [];
  listhesab: hesab[]=[];
  jsonlisthesab:hesab[] = [];
  listshirket: shirket[]=[];
  jsonlistshirket:shirket[] = [];
  listmushteri: mushteri[]=[];
  jsonlistmushteri:mushteri[] = [];
  listvahid: vahid[]=[];
  jsonlistvahid:vahid[] = [];
  listvergi: vergi[]=[];
  jsonlistvergi:verg[] = [];
  // _vahid: vahid[]=[];
  //jsonlistvahid:vahid[] = [];
  //#endregion
  constructor(private _caSer: SettingsService,private _caSer1: NavbarService ,
    private _ayar:AyarlarService, 
     private noti: NotificationService) {    
   }
  ngOnInit(): void {
    //let rol=this._auth.getrole();  
   // console.log(rol)  
    this._caSer1._allmenu()
    .pipe(
      flatMap(p=>{
         this.listnav=p;  
       //  console.log(this._caSer1._jsonmenu())         
       return this._caSer1._jsonmenu()
      })).subscribe(list=>
      { 
         this.jsonlistnav=list;
         this.noti.success(list+":: success") 
        // console.log(this.jsonlistnav)                     
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));   
    if(this._shomi)//---------------Muhasibat
    {
          //---------------vahid----
       /*   this._ayar._getvahid().subscribe(p=>
            { 
                this.listvahid
                =p; 
               // console.log(p)
                this._ayar._jsonvergi().subscribe( p=>{     
                this.jsonlistvergi=p;                                             
            })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
      */
            //---------------vergi----
          this._ayar._getvergi().subscribe(p=>
            { 
              this._gender=p; 
             // console.log(p)
              this._ayar._jsonvergi().subscribe( p=>{     
              this.jsonlistvergi=p;
            //  console.log(p.length)
             // this.addgender();                                 
          })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 

      //---------aktiv------------
      this._ayar._getaktiv().subscribe(p=>
        { 
            this.listaktiv =p;
            //console.log('uuuuu') 
            //console.log(p)
            this._ayar._jsondataktiv().subscribe( p=>{     
            this.jsonlistaktiv=p;
           // console.log(p)
           // this.addgender();                                 
        })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
        //---------------hesah----
        this._ayar._gethesab().subscribe(p=>
        { 
            this.listhesab =p; 
           // console.log(p)
            this._ayar._jsonhesab().subscribe( p=>{     
            this.jsonlisthesab=p;
           // console.log(p)
           // this.addgender();                                 
        })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
         //---------------mushteri----
         this._ayar._getmushteri().subscribe(p=>
          { 
              this.listmushteri  =p; 
             // console.log(p)
              this._ayar._jsonmushteri().subscribe( p=>{     
              this.jsonlistmushteri=p;
             // console.log(p)
             // this.addgender();                                 
          })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
           //---------------qrup----
        this._ayar._getqrup().subscribe(p=>
          { 
              this.listqrup  =p; 
             // console.log(p)
              this._ayar._jsonqrup().subscribe( p=>{     
              this.jsonlistqrup=p;
             // console.log(p)
             // this.addgender();                                 
          })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
           //---------------shirket----
        this._ayar._getshirket().subscribe(p=>
          { 
              this.listshirket =p; 
            //  console.log(p)
              this._ayar._jsonshirket().subscribe( p=>{     
              this.jsonlistshirket=p;
             // console.log(p)
             // this.addgender();                                 
          })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
           //---------------tip----
        this._ayar._gettip().subscribe(p=>
          { 
              this.listtip =p; 
             // console.log('%%%%%%')
              this._ayar._jsontip().subscribe( p=>{     
              this.jsonlisttip=p;
             // console.log(p)
             // this.addgender();                                 
          })}, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
    }  //------------Muhasibat son
    if(!this._shomi)
    {
    this._caSer._getgender()
    .pipe(
      flatMap(p=>{ this._gender=p ;         
       return this._caSer._jsonCate()
      }),
      flatMap(p=>{ this.jsonlistcat=p ; 
        return this._caSer._getcategoriy()  
    })).subscribe(list=>
      { 
         this.listcat=list;        

        // this._category();
       //  console.log(this._catt)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));

      this._caSer._getcategoriy().pipe(
      flatMap(p=>{ this.listcat=p ;         
       return this._caSer._getqoltipi()
      }),
      flatMap(p=>{ this.jsonlistqol=p ; 
        return this._caSer._jsonqoltip()  
    })).subscribe(list=>
      { 
         this.jsonlistqol=list; 
         //  this._category();
        // console.log(this.jsonlistqol)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));                 
        
       
     /* this._caSer._getqoltipi().subscribe(list=>
        { 
           this.listqol=list;  
           this._caSer._jsonqoltip().subscribe(list=>
            { 
              this.jsonlistqol=list;
             // this.addkoltip();
            })                        
        }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
*/

    this._caSer._getcolor().subscribe(list=>
    {         
           this.listcol=list;
           this._caSer._jsonCol().subscribe(p=>{
            this.jsonlistcol=p;
           // this.addcol();   
          })
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
   
    this._caSer._getitemdesen().subscribe(list=>
    { 
         this.listdes=list;   
         this._caSer._jsondesen().subscribe(list=>
          { 
            this.jsonlistdes=list;
          //  this.adddesan();
          })                      
   }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
    this._caSer._getqelip().subscribe(list=>
    { 
        this.listqel=list;
        this._caSer._jsonqalip().subscribe(list=>
          { 
            this.jsonlistqel=list;
           // this.addkalip();
          })                         
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
   
    this._caSer._getkullanimAlani().subscribe(list=>
    { 
       this.listkul=list; 
       this._caSer._jsonkullanal().subscribe(list=>
        { 
          this.jsonlistkul=list;
         // this.addkulalan();
        })                                        
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));  
    this._caSer._getkumashtipi().subscribe(list=>
    { 
        this.listkum=list; 
        this._caSer._jsonkumash().subscribe(list=>
          { 
            this.jsonlistkum=list;
           // this.addkumash();
          }) 
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getitemmarka().subscribe(list=>
    { 
       this.listmar=list; 
       this._caSer._jsonmarka().subscribe(list=>
        { 
          this.jsonlistmar=list;
         // console.log(this.jsonlistmar.length)
         // this.addmarka();
        }) 
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getitemmateral().subscribe(list=>
    { 
       this.listmat=list;
       this._caSer._jsonmaterial().subscribe(list=>
        { 
          this.jsonlistmat=list;
         // this.addmat();
        })  
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getitemstil().subscribe(list=>
    { 
      this.liststil=list;
      this._caSer._jsonstil().subscribe(list=>
        { 
          this.jsonliststil=list;
        //  this.addstil();
        }) 
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getyaka().subscribe(list=>
    { 
        this.listyak=list; 
        this._caSer._jsonyaka().subscribe(list=>
          { 
            this.jsonlistyak=list;
           // this.addyaka();
          }) 
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
    this._caSer._getbeden().subscribe(list=>
    { 
        this.listbeden=list; 
        this._caSer._jsonbeden().subscribe(list=>
          {            
            this.jsonlistbeden=list;
           // this.addbeden();
          }) 
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
   }//------_shomi---- son
  
  }
  
  addmenu()
  { 
   // console.log('%%%')
   //console.log(this.listnav)
   if(this.listnav.length===0)
   {
     // console.log(this.jsonlistnav.length)
      //var kn;
      for (let item of this.jsonlistnav) 
      {
        
         var p={
          nid:'',
          pid:item.pid,
          ntitle:item.ntitle,
          npath:item.npath,
          nlan:item.nlan,
          nrol:item.nrol,
          nisparent:item.nisparent ,
          ncsay:item.ncsay,
          ink:item.ink,
          nicon:item.nicon          
        }
        // console.log(p)
         this._caSer1._posmenu(p).subscribe();  
      }
    }
    else
    {
      var kn;
      console.log(this.listnav.length)
      for (let item of this.listnav) 
      {  
        console.log(item.pid)
       // console.log(this.listnav.find(x=>x.ntitle==item.pid)!.nid)
      if(this.listnav.find(x=>x.ntitle==item.pid)?.nid!=undefined){  
         // console.log(this.listnav.find(x=>x.ntitle==item.pid)?.nid)          
        if(item.pid===undefined){kn=''}
        else {
              kn=this.listnav.find(x=>x.ntitle==item.pid)?.nid;    
        }
         var pp={
          nid:item.nid,
          pid:kn,
          ntitle:item.ntitle,
          npath:item.npath,
          nlan:item.nlan,
          nrol:item.nrol,
          nisparent:item.nisparent,
          ncsay:item.ncsay,
          nicon:item.nicon
        }
         // console.log(pp)
        this._caSer1._posmenu(pp).subscribe();  
       }
      }
    }
  }
  //---------------Muhasibat---------
  
  
  //------------Vergi--------------------
  addvergi()
  { 
    if(this.listvergi.length===0)  
    {
      //#region vahid
      var filtered = new Set(this.jsonlistvergi.map(item => item.VAHID))
      filtered.forEach(x=>{
        var pp={
          vId:'',          
          vahidadi:x      
          }
         // console.log(pp)
       this._ayar._postvahid(pp).subscribe(); 
      });    
       //#endregion  
      //#region vergi
      this.jsonlistvergi.forEach(item => {
        var p={
          vergiId:'' ,
          edv_tar:undefined, 
          vId:item.VAHID, 
          vergikodu:item.CODE, 
          vergikodununadi:item.ADI,  
          STATE:item.STATE    
          }
           console.log(p)
         this._ayar._posvergi(p).subscribe();  
      });  
        //#endregion       
    }   
  }   
  

  //---------------hesab-----------------
  atbm(){
    var hes = this.jsonlisthesab;  
    hes.forEach(item => { 
      var p={           
          hesId:'' ,  
          bId:item.bId, 
          mId:item.mId, 
          hesnom:item.hesnom, 
          hesname:item.hesname,      
          tipId:item.tipId ,
          activId:item.activId                
         }
          // console.log(p);
         this._ayar._poshesab(p).subscribe(); 
    });         
  }
   addhesablar()
   {
      if(this.listhesab.length===0){ 
        var activ = new Set(this.jsonlisthesab.map(item => item.activId));
        activ.forEach(k=>{
         var p={ activId:'' , activName:k, description:'' }      
          // console.log(p);
           this._ayar._postaktiv(p).subscribe(); 
        });         
        var tip = new Set(this.jsonlisttip.map(item => item.tipName)) ; 
       tip.forEach(k => {
         var p={   tipId:'' , tipName:k  }
          //console.log(p);
          this._ayar._postip(p).subscribe(); 
        });  
        var bolme = new Set(this.jsonlisthesab.map(item => item.bId));
        bolme.forEach(i => {
          var p={ bId:'' , bolmeName:i }               
              //console.log(p)
           this._ayar._postbolme(p).subscribe();     
        }); 
        var madd = new Set(this.jsonlisthesab.map(y => y.mId));
        madd.forEach(y => {
          var p={  mId:'' , maddeName:y    } 
          //console.log(p); 
          this._ayar._posmadde(p).subscribe();
         });      
        
        forkJoin([tip,activ,madd, bolme]).subscribe(
          function (x) {         
            console.log('Next: %s', x[0]);
           // console.log('Next: %s', x[1]);
           // console.log('Next: %s', x[2]);           
          },
          function (err) { console.log('Error: %s', err);    },
          function ()    {   console.log('Completed') } );   
      }
      if(this.listshirket.length===0){ this.addshirket();  }
      if(this.listmushteri.length===0){  this.addmushteri();} 
      const source = interval(10000); 
      if(this.listhesab.length===0){ source.subscribe(_=> this.atbm());}
        
   }
  //---------------shirket-----------------
  addshirket()
  { 
   // console.log(this.listshirket.length)
    if(this.listshirket.length===0)  
    {
      this.jsonlistshirket.forEach(item => {
        var p={  
          
           shId:'' ,  
           bankadi:item.bankadi, 
           bankvoen:item.bankvoen,        
           swift:item.swift,        
           muxbirhesab:item.muxbirhesab,
           bankkodu:item.bankkodu,
           aznhesab:item.aznhesab,        
           shiricrachi :item.shiricrachi,
           shirvoen :item.shirvoen,
           cavabdehshexs:item.cavabdehshexs,
           email:'',
           unvan:item.unvan,
           userId:'',
           shirpercent:0               
           }
            // console.log(p)
            // console.log('#####')
          this._ayar._posshirket(p).subscribe(); 
      });      
    }   
  }   
  //---------------Mushteri-----------------
  addmushteri()
  { 
   // console.log(this.listshirket.length)
    if(this.listmushteri.length===0)  
    {
      this.jsonlistmushteri.forEach(item => {
        var p={  
          
          mushId:'' ,  
          firma:item.firma, 
          voen:item.voen,        
          muqavilenom:item.muqavilenom,        
          muqaviletar:undefined,
          valyuta:item.valyuta,
          odemesherti:item.odemesherti,        
          temsilchi :item.temsilchi   
          }
           //  console.log(p)
            // console.log('#####')
          this._ayar._posmushteri(p).subscribe(); 
      });      
    }   
  }      
  //----------Muhasib son-----------
  addcate()
  {
    
    //console.log('&&&&')
    if(this.listcat.length===0)
    {
      //console.log('&&&&')
     // console.log(this.jsonlistcat.length)
    
      for (let item of this.jsonlistcat) 
      {     
       // console.log(this._gender.find(x=>x.gender_name==item.gender_Id ).gender_Id)  
        var kn;
        let gendid=''
        if(item.genId!=''){
          gendid=this._gender.find(x=>x.genname==item.genId )!.genId 
        }

        var p={       
          catId:'' ,
          catname:item.catname.trim(),
          parid:item.parid,
          genId:gendid                
        }
       // console.log(p) 
        this._caSer._poscategoriy(p).subscribe(); 
      }     
     }
     else
     {
     // console.log(this.listcat.length)
      for (let it of this.listcat)
      {
          var kn;
         // console.log(it)
          if(it.parid===''){kn=''}
          else{kn=this.listcat.find(x=>x.catname==it.parid && x.genId==it.genId)?.catId}
          let genderid;
          if(it.genId!=''){
          genderid= this._gender.find(x=>x.genId==it.genId )?.genId
          }
          var ps={       
            catId:it.catId  ,
            catname:it.catname,
            genId: genderid,  
            parid:kn,       
          } 
         // console.log(ps)
          this._caSer._poscategoriy(ps).subscribe();
      }
     }
  }
  adddesan()
  { 
    if(this.listdes.length===0)  
    {
      for (let item of this.jsonlistdes) 
      {
       var p={
        desId:'' ,
        desname:item.desname,      
        }
        //  console.log(p)
       this._caSer._positemdesen(p).subscribe();  
      }                  
    }   
  } 
  addkalip()
  { 
    if(this.listqel.length===0)  
    {
      for (let item of this.jsonlistqel) 
      {
       var p={
        qelipId:'' ,
        qelipname:item.qelipname,      
        }
        //  console.log(p)
       this._caSer._posqelip(p).subscribe();  
      }                  
    }   
  }   
  addkulalan()
  { 
    if(this.listkul.length===0)  
    {
       console.log(this.jsonlistkul)
      for (let item of this.jsonlistkul) 
      {
       var p={
        kulalanId:'' ,
       // item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
        kullanimname:item.kullanimname    
        }
        //  console.log(p)
       this._caSer._poskullanimAlani(p).subscribe();  
      }                  
    }   
  } 
  addkumash()
  { 
    if(this.listkum.length===0)  
    {
      for (let item of this.jsonlistkum) 
      {
       var p={
        kumashId:'' ,
       // item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
       kumashname:item.kumashname    
        }
        //  console.log(p)
       this._caSer._poskumashtipi(p).subscribe();  
      }                  
    }   
  } 
  addmarka()
  { 
    if(this.listmar.length===0)  
    {
      for (let item of this.jsonlistmar) 
      {
       var p={
        markaId:'' ,
       // item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
       markaname:item.markaname   
        }
        //  console.log(p)
       this._caSer._positemmarka(p).subscribe();
      // console.log(p)
      }                  
    }   
  } 
  addmat()
  { 
    if(this.listmat.length===0)  
    {
      for (let item of this.jsonlistmat) 
      {
       var p={
        matId:'' ,
       // item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
         matname:item.matname   
        }
        //  console.log(p)
       this._caSer._positemmateral(p).subscribe();  
      }                  
    }   
  } 
  addstil()
  { 
    if(this.liststil.length===0)  
    {
      for (let item of this.jsonliststil) 
      {
       var p={
        stilId:'' ,
       // item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
       stilname:item.stilname   
        }
        //  console.log(p)
       this._caSer._positemstil(p).subscribe();  
      }                  
    }   
  }
  addkoltip()
  { 
    console.log(this.jsonlistqol.length)
   // console.log(this.jsonlistqol)
    if(this.listqol.length===0)  
    {
      for (let item of this.jsonlistqol) 
      {
        let gendid=''
        if(item.genId!=''){
          gendid=this._gender.find(x=>x.genname==item.genId)!.genId
        }
       var p={
        qolId:'' ,
        //item_categoriy_Id:item.item_categoriy_Id, 
        genId:gendid, 
        qoltipiname:item.qoltipiname    
        }
      //  console.log(p)
       this._caSer._posqoltipi(p).subscribe();  
      }                  
    }   
  } 
  addyaka()
  { 
    if(this.listyak.length===0)  
    {
      // console.log(this.jsonlistyak)
      for (let item of this.jsonlistyak) 
      {
       var p={
        yakaId:'' ,
        genId:this._gender.find(x=>x.genname==item.genId)!.genId, 
        //item_categoriy_Id:this.listcat.find(x=>x.item_categoriy_name===item.item_categoriy_Id).item_categoriy_Id, 
        yakaname:item.yakaname  
        }
       // console.log(p)
       this._caSer._posyaka(p).subscribe();  
      }                  
    }   
  }
  addbeden()
  { 
    if(this.listbeden.length===0)  
    {
     // console.log(this.jsonlistbeden.length)
      for (let item of this.jsonlistbeden) 
      {        
      //  console.log(this.jsonlistbeden.filter(x=>x.ayakUz!=null).length)        
         let ge='';
         
         if(item.genId!=''){
          ge=this._gender.find(x=>x.genname==item.genId)!.genId;
         }
            var p={
            bedenId:'' ,
            bedeni:item.bedeni,
            trEu:item.trEu,
            uk:item.uk,
            us:item.us,
            it:item.it,
            koks:item.koks,
            bel:item.bel,
            ayakUz:item.ayakUz,
            ichBacakBoyu:item.ichBacakBoyu,
            yaka:item.yaka,
            kot:item.kot,
            uzunluk:item.uzunluk,
            catId:this.listcat.find(x=>x.parid===null && x.catname===item.catId && x.genId===ge)!.catId,
            genId:ge 
             
          }
          //console.log(p)
          this._caSer._posbeden(p).subscribe();  
      }                  
    }   
  }
  addgender()
  {
 //console.log('&&&&')
     if(this._gender.length===0)
     {
       for (let item of this.jsonlistgen) 
       {
         var p={
           genId:''  ,
           genname:item.genname       
         }
         this._caSer._postgender(p).subscribe(); 
       } 
     }
   }
   addcol()
   {
     //console.log(this.listcol)
     if(this.listcol.length===0)
     {
       for (let item of this.jsonlistcol) 
       {
         var p={
           colId:''  ,
           colname:item.colname,
           colurl:item.colurl     
         }
         this._caSer._poscolor(p).subscribe();  
        // console.log(item)
       }
     }
   }
}
