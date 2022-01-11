import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorInterceptor } from './error.interceptor';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getToken } from 'src/app/auth/store/auth.selectors';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    currentUser:any;
    constructor(private store: Store<AppState>) {
        this.store.select(getToken).subscribe(p=>{
          this.currentUser=p;          
        })
     }                                               
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {       

        if(request.url.includes('postitemsphoto'))//||request.url.includes('delitemsphoto')
        {
            //console.log('aaaaaa')
            request = request.clone({setHeaders : { }})
        }
        else { 
            //console.log('bbbbbb')
            request = request.clone({setHeaders : { 'Content-Type': 'application/json','Access-Control-Allow-Methods': '*'  }}) 
        }
        if (this.currentUser) 
        { 
           // console.log('XXXX')
           // console.log(this.currentUser)
            request = request.clone({ setHeaders: { Authorization: `Bearer ${this.currentUser}` } });
        }
        return next.handle(request);
    }
}
  export const authInterceptorProviders = [ 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true  },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi: true  }    
];
   