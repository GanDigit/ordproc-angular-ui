import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',    
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestOrderService {

  //endpoint = 'http://localhost:8081/';
  endpoint = 'http://9.204.168.81:31494/';
  
  constructor(private http: HttpClient) { }

  getEndPoint() {
    return this.endpoint;
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  getOrders(): Observable<any> {
    console.log("EndPoint 1-->" + this.getEndPoint());
    console.log("EndPoint 11-->" + this.endpoint);
    return this.http.get(this.endpoint + 'orders').pipe(
      map(this.extractData));
  }
  
  getOrder(id): Observable<any> {
    console.log("EndPoint 2-->" + this.getEndPoint());
    return this.http.get(this.getEndPoint() + 'orders/' + id).pipe(
      map(this.extractData));
  }
  
  addOrder (order): Observable<any> {
    console.log(order);
    return this.http.put<any>(this.getEndPoint() + 'orders', JSON.stringify(order), httpOptions).pipe(
      tap((order) => console.log(`added order w/ id=${order.id}`)),
      catchError(this.handleError<any>('addOrder'))
    );
  }
  
  updateOrder (id, order): Observable<any> {
    return this.http.put(this.getEndPoint() + 'orders', JSON.stringify(order), httpOptions).pipe(
      tap(_ => console.log(`updated order id=${id}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }  
  
  deleteOrder (id): Observable<any> {
    return this.http.delete<any>(this.getEndPoint() + 'orders/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted order id=${id}`)),
      catchError(this.handleError<any>('deleteOrder'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
