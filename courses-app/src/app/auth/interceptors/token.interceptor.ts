import { Injectable } from '@angular/core';
import { HttpRequest,  HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';


import {SessionStorageService} from "../services/session-storage.service";

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private sessionService: SessionStorageService,

  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string | null = this.sessionService.getToken('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', token) });
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      //clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone( { headers: headers});
      return next.handle(AuthRequest)
    }else {
      return next.handle(request);
    }
  }
}
