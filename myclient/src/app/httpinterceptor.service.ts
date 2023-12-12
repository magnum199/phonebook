import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginService } from './login.service';



@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor(private loginService: LoginService) { }

  mtoken: any;



  

  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
     this.mtoken = this.loginService.getToken();
     

   let modreq  = req.clone({
      setHeaders: {
        Authorization: String(this.mtoken)
      }
    });




    return next.handle(modreq).pipe(
      tap((event: HttpEvent<any>) => {
        // Handle successful responses
        if (event instanceof HttpResponse) {
          //console.log('Response:', event);
        }
      }),
      catchError((error: any) => {
        // Handle errors
        if (error instanceof HttpErrorResponse) {
          //console.error('Error:', error);
        }
        // Propagate the error to the calling code
        return throwError(error);
      })
    );
  }

}
