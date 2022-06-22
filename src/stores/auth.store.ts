
// export const authStore = new Auth();

import {
    observable,
    runInAction,
    action,
    autorun,
    toJS,
    makeAutoObservable,
    makeObservable
  } from 'mobx';
  import { Injectable } from '@angular/core'; 
  import { HttpClient } from '@angular/common/http';
import { IRegister } from 'src/app/models/auth.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
  export class Auth {

  sending = false;
  message = "";
  error = false;
  isAuth = false;
  userType = "";
  constructor(private http: HttpClient) {
    makeAutoObservable(this, {
      sending: observable,
      message: observable,
      error: observable,
      isAuth: observable,
      userType: observable
    });
  }

  signUp(data: IRegister): Observable<string> {
    this.error = false;
    this.sending = true;
    try {
      this.http.post<IRegister>("users", data) 
        .subscribe((res:any) => {
          this.sending = false;
          if (res.status === 201) {
            runInAction(() => {
              console.log("response", res.data);
              this.message = res.data.message;
              return this.message;
            });
          }
        }, (error) =>{
          this.error = true; 
          this.message = error;
          }
        );
   
     return "Network Connection seems slow."; 
    } catch (error) {
      this.sending = false;
      this.error = true;
      console.log({ error });
      throw error;
    }
  };
  }