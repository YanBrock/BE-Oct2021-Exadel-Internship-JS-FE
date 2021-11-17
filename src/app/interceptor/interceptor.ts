import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginService } from "../services/user-login.service";



@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private auth: UserLoginService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{

    if (this.auth.isAuthenticated()) {

      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      })
    }
    return next.handle(req)
  }

}
