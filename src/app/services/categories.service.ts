import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InTwineProduct } from '../models/intwine_product.model';
import { UpdateCategory } from '../models/updateCategory.model';
import { PostCategory } from '../models/postCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  readonly url = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http:HttpClient) {}

   public getCategories(){ 
   return this.http.get<Category[]>(this.url);
   }
   public getCategoryById(id:string|null){
    return this.http.get<Category>(this.url+'/'+id);
   }
   public getProductsbyCategory(id:string|null){
    return this.http.get<InTwineProduct[]>(this.url+'/'+id+'/products');
    
   }
   public editCategory(id:string|null, param:UpdateCategory){
    const body = param;
    return this.http.put<any>(this.url +'/'+ id, body)
  }
  public createCatogory(formdata:PostCategory){
    const body = formdata;
    console.log(body);
    return this.http.post<PostCategory>(this.url, body);
  }
}
