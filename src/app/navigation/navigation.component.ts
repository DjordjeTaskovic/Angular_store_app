import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
     let storeData = localStorage.getItem("token");
     if( storeData != null)
        this.isUserLoggedIn = true;
     else
        this.isUserLoggedIn = false;
  }
}
