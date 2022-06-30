import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
  public url ='https://api.escuelajs.co/api/v1/auth/login';

   constructor(private http:HttpClient) { }

   public login(email: string, password: string){
     
      const body = { email,password }
      console.log(body);
      
      return this.http.post<any>(this.url, body);
   }

   public logout(): void {
       localStorage.removeItem('token'); 
    }

}