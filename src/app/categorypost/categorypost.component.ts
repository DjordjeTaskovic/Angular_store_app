import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostCategory } from '../models/postCategory.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categorypost',
  templateUrl: './categorypost.component.html',
  styleUrls: ['./categorypost.component.css']
})
export class CategorypostComponent implements OnInit {
  public categoryForm!:FormGroup;

  constructor(
    private categoryService:CategoriesService,
    private formbuilder:FormBuilder) {
    this.createForm();
   }

  public createForm(){
    this.categoryForm = this.formbuilder.group({
      name:['',[Validators.required]],
      image:['',[Validators.required]],
    });

  }
 
   public submitForm(formdata:PostCategory){
    if(!this.categoryForm.valid){
      window.alert("Form is not valid.");
      return;
    }else{ 
      
      this.categoryService.createCatogory(formdata)
      .subscribe((par:PostCategory)=>{
        window.alert(`Your category with name ${par.name} is created.`);
        window.location.href="categories";
      })

    }
  }
  ngOnInit(): void {
  }
}
