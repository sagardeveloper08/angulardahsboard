import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { _exam, _question } from '../models/exem';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExemService {
  pathAPI: string;
  constructor(private http: HttpClient) { this.pathAPI=environment.apiUrl+'_question/';  }
  _posques(bo:_question):Observable<_question> {        
    const body=JSON.stringify(bo);  
    //console.log(this.pathAPI + 'Post_question', body)
    return this.http.post<_question>(this.pathAPI + 'Post_question', body)
       .pipe(
          map((data) => {
            //You can perform some transformation here
           return data;
         }),
         catchError((err) => {
          // console.error(err);
           throw err;
         }
       ))
  }  
  _getsubjects(): Observable<any>{     
     
    return this.http.get<any>(this.pathAPI +'Getsubjects')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
      //  console.error(err);
        throw err;
      }
    )); 
  }  
  _getquestions(): Observable<any>{     
    // console.log('SSS')
    return this.http.get<any>(this.pathAPI +'Getquestions')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
       // console.error(err);
        throw err;
      }
    )); 
  }
  _getemail(): Observable<any>{     
    // console.log('SSS')
    return this.http.get<any>(this.pathAPI +'Getemail')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
       // console.error(err);
        throw err;
      }
    )); 
  }
  _get_examsum(id:Date): Observable<any>{     
    // console.log('SSS')
    return this.http.get<any>(this.pathAPI +'get_examsum/?id='+id)
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
       // console.error(err);
        throw err;
      }
    )); 
  }   

  _get_examdet(bo:_exam): Observable<any>{     
    // console.log('SSS')
    const body=JSON.stringify(bo);  
    return this.http.post<_exam>(this.pathAPI + 'get_examdet', body)  
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
       // console.error(err);
        throw err;
      }
    )); 
  }  
  //------------exam------
  _posexam(bo:_exam):Observable<_exam> {        
    const body=JSON.stringify(bo);  
    //console.log(this.pathAPI + 'Post_exam', body)
    return this.http.post<_exam>(this.pathAPI + 'Post_exam', body)
       .pipe(
          map((data) => {
            //You can perform some transformation here
           return data;
         }),
         catchError((err) => {
         //  console.error(err);
           throw err;
         }
       ))
  }  
  _Findexam(bo:_exam):Observable<_exam> {        
    const body=JSON.stringify(bo);  
    //console.log(this.pathAPI + 'Findexam', body)
    return this.http.post<_exam>(this.pathAPI + 'Findexam', body)
       .pipe(
          map((data) => {
            //You can perform some transformation here
           return data;
         }),
         catchError((err) => {
           //console.error(err);
           throw err;
         }
       ))
  }  
}
