import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getId } from 'src/app/auth/store/auth.selectors';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    uid:any;
    constructor(private authenticationService: AuthService,private store :Store<AppState>) { 
     this.store.select(getId).subscribe(k=>{this.uid=k;})
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1){
                // auto logout if 401 response returned from api
                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                 location.reload();
                this.authenticationService.logout(this.uid);               
            }
            const error = err.error || err.statusText;
            return throwError(error);
        }))
    }
}



/*
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}*/