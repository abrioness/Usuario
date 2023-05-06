import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders   } from '@angular/common/http';
import { RequestOptions } from 'http';

import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';



const TOKEN_KEY = 'my-token';


@Injectable({
  providedIn: 'root'
})
export class UsrService {

  // isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	// token = '';

  constructor(public http:HttpClient) { 
    // this.loadToken();
  }

  private url_book='http://localhost:5285/api/';
  
  //Validar Login del Usuario
  getPosts(u:any,p:any){
    
    return new Promise(resolve=>{
      this.http.get(`${this.url_book}Login/data?u=${u}&p=${p}`)    
      .subscribe(data=>{        
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
//Validar existencia de Usuario
  GetPostsUser(pnom:any,pape:any,u:any){
    
    return new Promise(resolve=>{
      this.http.get(`${this.url_book}RegUsers/validar?pnom=${pnom}&pape=${pape}&u=${u}`)    
      .subscribe(data=>{        
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
  
  //Registrar Usuario
  addPost(data:any) {
  
     
    return new Promise((resolve, reject) => {
       this.http.post(`${this.url_book}RegUsers/Registrar`, data)
        .subscribe(response => {
          resolve(response);
          console.log(response);
        }, (error) => {
          reject(error);
        });
    });
   }



   
		// const token = await Storage.get({ key: TOKEN_KEY });
	 	// if (token && token.value) {
	// 		console.log('set token: ', token.value);
	// 		this.token = token.value;
	// 		this.isAuthenticated.next(true);
	// 	} else {
	// 		this.isAuthenticated.next(false);
	// 	}
	//}

	// login(credentials: { email; password }): Observable<any> {
	// 	return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
	// 		map((data: any) => data.token),
	// 		switchMap((token) => {
	// 			return from(Storage.set({ key: TOKEN_KEY, value: token }));
	// 		}),
	// 		tap((_) => {
	// 			this.isAuthenticated.next(true);
	// 		})
	// 	);
	// }

	// logout(): Promise<void> {
	// 	this.isAuthenticated.next(false);
	// 	return Storage.remove({ key: TOKEN_KEY });
	// }
  
}
