import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/product.service';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { PostProduct } from '../models/postProduct.model';

@Component({
  selector: 'app-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.css']
})
export class ProductPostComponent implements OnInit {
  public productForm!:FormGroup;
  categories!:Observable<Category[]>;

  constructor(private postService:PostService,
    private categoryService:CategoriesService,
    private formbuilder:FormBuilder) {
    this.getCategories();
    this.createForm();
   }

   public getCategories(){
    this.categories = this.categoryService.getCategories();
   }

  public createForm(){
    this.productForm = this.formbuilder.group({
      title:['',[Validators.required]],
      price:['',[Validators.required]],
      description:['',[Validators.required]],
      categoryId:['',[Validators.required]],
      images:['',[Validators.required]],
    });

  }
 
   public submitForm(formdata:PostProduct){
    if(!this.productForm.valid){
      window.alert("Form is not valid.");
      return;
    }else{ 
      this.postService.createProduct(formdata)
      .subscribe((par:PostProduct)=>{
        window.alert(`Your product with title ${par.title} is created.`);
        this.productForm.reset();
      })

    }
  }
  ngOnInit(): void {
  }

}
