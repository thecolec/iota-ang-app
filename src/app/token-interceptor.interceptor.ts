import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private iotaAuth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token');
    // Check if token is present
    if (authToken) {
      request = request.clone({
        setHeaders: {
          'x-access-token': authToken
        }
      });
    }
    return next.handle(request);
  }
}
