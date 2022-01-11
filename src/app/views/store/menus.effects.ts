import { Injectable } from '@angular/core';
import { Actions,   Effect,  ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError,  map, switchMap } from 'rxjs/operators';
import { NavbarService } from 'src/services/navbar.service';
import * as menu from './menus.actions';
//import { Store } from '@ngrx/store';
//import { AppState } from 'src/app/reducers';


@Injectable()
export class MenusEffects {
  
  constructor(
    private actions$: Actions,
    private navbarService: NavbarService) {}//,  private store$: Store<AppState>

    // saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
    //   ofType(initMenu),
    //   withLatestFrom(
    //     this.store$.pipe(select(getLoaded)),
    //     this.store$.pipe(select(getLoading))
    //   ),
    //   filter(([_, loaded, loading]) => !loaded && loading),
    //   switchMap(() => this.adminMenuService.getMenu().pipe(
    //     map(data => initMenuSuccess({data})),
    //     catchError(error => of(
    //       initMenuFailed({serverError: error.serverError})
    //     ))
    //   ))
    // ));
  @Effect()
  menuAction$ = this.actions$.pipe(
    ofType<menu.initMenu>(menu.MenusActionTypes.INIT),
    map( (action: menu.initMenu) => action),    
    // withLatestFrom(      
    //       this.store$.pipe(select(getLoaded)),
    //       this.store$.pipe(select(getLoading))
    //   ),
    // filter(([_, getLoaded, getLoading]) => !getLoaded && getLoading),
    
    switchMap(_=> this.navbarService._allmenu().pipe(
      map((res: any) => {    
        //console.log(res)
        return new menu.MenuSuccess( { menudata:res } );
      }),
     // tap(() => this.router.navigateByUrl('')),
      catchError(error => of(new menu.MenuError({ error })))
    )
  )
);

}

