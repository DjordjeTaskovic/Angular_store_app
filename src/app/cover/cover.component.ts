import { Component, OnInit } from '@angular/core';
import { InTwineProduct } from '../models/intwine_product.model';
import { PostService } from '../services/product.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  data:any;
  constructor(private productService:PostService) {
    this.productService.refreshProducts()
    .subscribe((e)=>{
      this.data = e;
    });
   }

  ngOnInit(): void {
  }

}
