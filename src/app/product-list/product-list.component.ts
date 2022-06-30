import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/product.service';
import { InTwineProduct } from '../models/intwine_product.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  data:any;
  page:number = 1;

  constructor(private productService: PostService) {  }
    ngOnInit(): void {
      this.getData();
    }
    public getData(){
      this.productService.refreshProducts()
      .subscribe((e)=>{
        this.data = e;
      });
    }
  

}
