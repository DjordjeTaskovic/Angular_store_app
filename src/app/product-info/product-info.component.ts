import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { InTwineProduct } from '../models/intwine_product.model';
import { PostService } from '../services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
   public product!: InTwineProduct;
  public id!:string|null;
  public isUserLoggedIn:boolean = false;
  constructor(private postservice:PostService,
    private route:ActivatedRoute,) {

    this.route.paramMap.subscribe( par => {
      this.id = par.get('id');
    })
     this.postservice.getProductById(this.id)
      .subscribe((e:InTwineProduct) => {
        this.product = e;
        });
   }

  ngOnInit(): void {
    let storeData = localStorage.getItem("token");
     if( storeData != null)
        this.isUserLoggedIn = true;
     else
        this.isUserLoggedIn = false;
  }
  public deleteProduct(){
    this.postservice.destroyProduct(this.id)
    .subscribe((e)=>{
      window.alert("Your product has been removed.");
      window.location.href = '/';
    })
  }

}
