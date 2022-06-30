import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { InTwineProduct } from '../models/intwine_product.model';
import { CategoriesService } from '../services/categories.service';
import { PostService } from '../services/product.service';

@Component({
  selector: 'app-categoryinfo',
  templateUrl: './categoryinfo.component.html',
  styleUrls: ['./categoryinfo.component.css']
})
export class CategoryinfoComponent implements OnInit {
  public id!:string|null;
  public category!:Category;
  public products!:Observable<InTwineProduct[]>;


  constructor(private route:ActivatedRoute,
    private catService:CategoriesService) { 

    this.route.paramMap.subscribe( par => {
      this.id = par.get('id');
    });

    this.catService.getCategoryById(this.id)
    .subscribe((e:Category) => {
      this.category = e;
      });
       
   this.products = this.catService.getProductsbyCategory(this.id);
  }

  ngOnInit(): void {
  }

}
