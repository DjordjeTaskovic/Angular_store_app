import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public data!:Observable<Category[]>;

    constructor(private catService: CategoriesService,) { 

        this.data = this.catService.getCategories();
      }
      
  ngOnInit(): void {
  }

}
