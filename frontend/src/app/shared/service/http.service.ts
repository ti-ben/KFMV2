import { catchError, finalize } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse, PayloadInterface } from '@shared/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  loadingEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  public errorHandler(error: { error: { message: any; }; status: any; message: any; }): Observable<ApiResponse> {
    if (error.error instanceof ErrorEvent) {
      return of({result: false, data: null, code: 'api.fatal-error'});
    } else {
      return of({result: false, data: null, code: 'api.fatal-error'});
    }
  }

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public post(url: string, data: PayloadInterface): Observable<any> {
    this.loadingEmitter.next(true);
    return this.http.post(url, data).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public put(url: string, data: PayloadInterface): Observable<any> {
    this.loadingEmitter.next(true);
    return this.http.put(url, data).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  handleRedirectError(err: HttpErrorResponse) {
    if (err.status === 0) {
      // this.navigation.navigateToUnsecure();
    }
  }
}
