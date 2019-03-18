import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://9.204.168.81:30371/';
const endpoint2 = 'http://localhost:8082/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    console.log('extractData--> ${res}')
    return body || { };
  }

  getProducts(): Observable<any> {
    console.log('getProducts--> sdf')
    return this.http.get(endpoint + 'products').pipe(
      map(this.extractData));
  }
  
  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }
  
  addProduct (product): Observable<any> {
    console.log("Add product ---> " + JSON.stringify(product));
    return this.http.put<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
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


