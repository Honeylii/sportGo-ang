
import {
    observable, 
    action,
    autorun,
    toJS,
    makeAutoObservable,

  } from 'mobx';
  import { Injectable } from '@angular/core'; 
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILogin, IRegister } from 'src/app/models/auth.model';
import { catchError, Observable, throwError } from "rxjs";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
  export class Auth {

  sending = false;
  message = "";
  error = false;
  isAuth = false;
  userType = "";
  users = [];
  constructor(private http: HttpClient) {
    makeAutoObservable(this, {
      sending: observable,
      message: observable,
      error: observable,
      isAuth: observable,
      users: observable,
      userType: observable,
      login: action,
      signUp: action,
    });
  }

  signUp(data: IRegister) { 
    try {
      return this.http.post<any>(`${environment.apiUrl}/users`, data).pipe(catchError(this.handleError));
    } catch (error) { 
      console.log({ error });
      throw error;
    }
  };

  login(data: ILogin) { 
    try {
      return this.http.post<any>(`${environment.apiUrl}/users/auth`, data).pipe(catchError(this.handleError));
    } catch (error) { 
      console.log({ error });
      throw error;
    }
  };

  getAllUsers(){
    this.http.get<any>(`${environment.apiUrl}/users`).subscribe((users) => {

    })
  }
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
  }