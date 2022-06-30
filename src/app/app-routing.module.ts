import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryinfoComponent } from './categoryinfo/categoryinfo.component';
import { CategorypostComponent } from './categorypost/categorypost.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPostComponent } from './product-post/product-post.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

import { AuthGuard } from './auth.guard';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'productslist', component: ProductListComponent },
  { path: 'addproduct', component: ProductPostComponent ,canActivate: [AuthGuard]},
  { path: 'products/:id', component: ProductInfoComponent },
  { path: 'editproduct/:id', component: ProductUpdateComponent ,canActivate: [AuthGuard]},

  { path: 'categories', component: CategoryComponent },
  { path: 'addcategories', component: CategorypostComponent ,canActivate: [AuthGuard]},
  { path: 'categoryinfo/:id', component: CategoryinfoComponent },
  { path: 'editcategories/:id', component: CategoryupdateComponent ,canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

