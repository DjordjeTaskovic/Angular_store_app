import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category.model';
import { UpdateCategory } from '../models/updateCategory.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
  public id!:string|null;
  public category!:Category;
  public editForm!:FormGroup;

  constructor(private route:ActivatedRoute, 
    private catService:CategoriesService, 
    private formbuilder:FormBuilder) { 

    this.route.paramMap.subscribe( par => {
      this.id = par.get('id');
    });

    this.catService.getCategoryById(this.id)
    .subscribe((e:Category) => {
      this.category = e;
      this.editForm.patchValue({
        name: e.name,
     });
      });
       this.createForm();
  }
  public createForm(){
    this.editForm = this.formbuilder.group({
      name:['',[Validators.required]],
    });
  }
  public submitForm(formdata:UpdateCategory){
    if(!this.editForm.valid){
      window.alert("Form is not valid.");
      return;
    }else{ 
      this.catService.editCategory(this.id, formdata)
      .subscribe((par:UpdateCategory)=>{
        window.alert(`Your category was updated.`);
        window.location.href='categories';
      })

    }
  }

  ngOnInit(): void {
  }

}
