import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenData } from '../models/token.model';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   logForm!: FormGroup;
   email!:string;
   password!:string;
   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.logForm = new FormGroup({
         email: new FormControl(),
         password:new FormControl()
     });
     this.logForm.patchValue({
      email: "john@mail.com",
      password:"changeme"
   });
   }

   onClickSubmit(data:any) {
      this.email = data.email;
      this.password = data.password;

      this.authService.login(this.email,this.password)
         .subscribe( (data:TokenData) => { 
          if(data){
             localStorage.setItem("token",data.access_token);
            window.location.href="/productslist";
          }
      });
     
   }
}