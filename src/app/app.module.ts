import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductPostComponent } from './product-post/product-post.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CategoryComponent } from './category/category.component';
import { CategorypostComponent } from './categorypost/categorypost.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { CategoryinfoComponent } from './categoryinfo/categoryinfo.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CoverComponent } from './cover/cover.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductInfoComponent,
    NavigationComponent,
    ProductPostComponent,
    ProductUpdateComponent,
    CategoryComponent,
    CategorypostComponent,
    CategoryupdateComponent,
    CategoryinfoComponent,
    LoginComponent,
    LogoutComponent,
    CoverComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
