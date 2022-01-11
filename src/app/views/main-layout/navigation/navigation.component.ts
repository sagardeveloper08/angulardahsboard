import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MenuItem } from 'src/models/_menu';
import { User } from 'src/models/_users';
import { getMenuData } from '../../store/menus.selectors';
import * as actions from '../../store/menus.actions'; 
import { AuthService } from 'src/services/auth.service';
//import { NavbarService } from 'src/services/navbar.service';
//import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;
  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => { this.sidenavToggle.emit(); }
  status: boolean = false;  clickEvent(){  this.status = !this.status; console.log(this.status);  }
  _menu:MenuItem[];_childmenu:any;
  _photoUrl=''
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;
  @Output() logout = new EventEmitter<User>();
  clicked: boolean;

  constructor(private store$: Store,private _aut:AuthService //,private _nav:NavbarService//
    ) {
    this.clicked = this.clicked === undefined ? false : true;
  }
  ngOnInit() {
    //console.log('2222222222')
    //console.log(this.user.uid)
   
    //console.log(this._aut.getrole())

     if(this._aut.getrole()!=undefined){ 
    //  console.log('2222222222')   
      this.store$.dispatch(new actions.initMenu()); 
     // console.log('211')
      // this.menudata$.subscribe(p=>{
      //   if(p!=null){
      //      console.log(p)         
      //   }    
      // })
      this.store$.select(getMenuData).subscribe(k=>{ 
        this._menu=k; 
       // console.log(k) 
        //console.log('211')
        this._childmenu=this._menu.filter(g=>!g.nisparent && g.pid!=null);
        //console.log('111') ;
      })
      // this._caSer._allmenu(this._aut.getrole()).subscribe( p=>{
      // this._menu=p;        
      // this._childmenu=this._menu.filter(g=>!g.nisparent && g.pid!=null);                 
      // });
      
     this._photoUrl=environment.apiUrl.replace('/api/','/')+this.user.photoUrl;
    }         
  }
  onLogout() {
    // console.log('11111111111')  
       this.logout.emit(this.user); }
  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
