import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InTwineProduct } from '../models/intwine_product.model';
import { PostProduct } from '../models/postProduct.model';
import { UpdateProduct } from '../models/updateProduct.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly url = 'https://api.escuelajs.co/api/v1/products';
  constructor(private http:HttpClient) {}

   public refreshProducts(){ 
   return this.http.get(this.url);
   }

   public getProductById(id:string|null){
   return this.http.get<InTwineProduct>(this.url +'/'+ id);
   }

   public createProduct(formdata:PostProduct):Observable<PostProduct>{
        const body ={
          title:formdata.title,
          price:formdata.price,
          description:formdata.description,
          categoryId: Number(formdata.categoryId),
          images:[formdata.images]
        }
     return this.http.post<PostProduct>(this.url, body);
    }
    public destroyProduct(id:string|null){
      return this.http.delete<any>(this.url+"/"+id);

    }
    public editProduct(id:string|null, param:UpdateProduct){
      const body = param;
      return this.http.put<any>(this.url +'/'+ id,body)
    }
  
  
  
}
