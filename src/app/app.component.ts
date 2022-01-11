import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { User } from 'src/models/_users';
import { MenuItem } from 'src/models/_menu';
import { getIsAdmin, getIsLoading, getIsLoggedIn, getUser } from './auth/store/auth.selectors';
import { getMenuData } from './views/store/menus.selectors';
import * as fromAuth from './auth/store/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];
  specialPage: boolean;
  user$: Observable<User | null>;
  isLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  menudata$: Observable<MenuItem[]> 
  private specialPages: any[] = [
    // '/pages/login',
    // '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(private store: Store<AppState>, private router: Router, private location: Location ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });

  }

  ngOnInit(): void {
    //console.log('111111111')
    this.user$ = this.store.select(getUser);    
    this.isLoggedIn$ = this.store.select(getIsLoggedIn);
    this.isLoading$ = this.store.select(getIsLoading);    
    this.isAdmin$ = this.store.select(getIsAdmin);
    this.menudata$ = this.store.select(getMenuData); 
  /* this.user$.subscribe(p=>{
       if(p!=null){
          console.log(p!.uid)
          console.log(p!.email)
          console.log('p') 
       }      
     })*/
    //  this.menudata$.subscribe(p=>{
    //   if(p!=null){
    //      console.log(p)         
    //   }    
    // })
    //console.log(this.st.getToken())
    //console.log(this.st.getrole())
 }
 onLogout(user: User) {
   // console.log('222222222')
    this.store.dispatch(new fromAuth.LogoutRequested( { user }));
 }

  goBack(): void {  this.location.back(); }
}
